---
title: 【vue项目总结】后台管理项目总结
date: 2019-06-19
---

公司做的大部分都是后台管理项目，剔除每个项目的业务逻辑，其实都可以通用的一套模板来做

### 登录逻辑
 每个系统都有自己的登录登出逻辑，而我们前端所要做的其实请求后台，拿到登录权限，带上登录权限，获取用户信息和菜单信息。在vue项目开发当中，我们一般都是在**全局路由钩子**做这一系列判断
 ```
router.beforeEach(async(to, from, next) => {
  NProgress.start();
  await store.dispatch('SetConfigApi'); //获取配置
  await store.dispatch('SetApi'); // 设置基本配置
  const token = await store.dispatch('getToken'); //获取token
  if (token) {
    if (!store.getters.userInfo) {
      await store.dispatch('GetUser'); //获取用户信息
      const menuList = await store.dispatch('GetMenu', localRoute); //获取菜单
      await store.dispatch('GenerateRoutes', localRoute);
      router.addRoutes(store.getters.addRoutes);
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      window.location.href = store.getters.api.IPORTAL_LOCAL_API;
      NProgress.done();
    }
  }
})
```
 当用户进入系统的时候，先获取系统的配置信息，这个配置信息可以是前端json文件，或者是后台接口；用这种方式可以灵活的修改项目中的配置，而不用每次打包进入项目，直接可以要运维童鞋修改对应的按钮配置信息；

### 菜单权限
 之前的菜单路由直接是写死在前端，但是当我们直接访问这个路由时，用户还是可以进入到这个功能页面；后来直接改成动态添加路由的方式router.addRoutes.
 1. 前端先获取菜单列表；
 2. 根据获取菜单列表循环添加用户菜单路由集合；
 3. 动态添加路由；
```
import { asyncRoutes, homePage } from '@/router/modules/routes';

/**
 * 通过路由path判断是否与当前用户权限匹配
 * @param permissionMenu
 * @param route
 */
function hasPermission(permissionMenu, route) {
  return (
    permissionMenu.findIndex(v => {
      const key = v.path || v;
      const sort = v.sort || '';
      route.sort = sort; // 排序
      return route.path.includes(key);
    }) > -1
  );
}

/**
 * 递归过滤异步路由表，返回符合用户权限的路由表
 * @param routes asyncRouterMap
 * @param permissionMenu
 */
function filterAsyncRouter(routes, permissionMenu) {
  const menu = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(permissionMenu, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(route.children, permissionMenu);
      }
      menu.push(tmp);
    }
  });
  return menu;
}

const permission = {
  state: {
    permissionList: [],
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_PERMISSION: (state, list) => {
      state.permissionList = [...list];
    },
    SET_ROUTES: (state, routes) => {
      state.addRoutes = [...routes];
      state.routes = [homePage, ...routes];
    }
  },
  actions: {
    async GenerateRoutes({ dispatch, commit }, data) {
      const permissionList = await dispatch('GetMeunPermission', data);
      const routes = filterAsyncRouter(asyncRoutes, permissionList);
      commit('SET_ROUTES', routes);
    },
    // 遍历菜单获取Permission字段
    async GetMeunPermission({ commit }, data) {
      const permissionMenu = [];

      function getMenus(menuData) {
        menuData.forEach(e => {
          if (e.permission) {
            // 需要排序字段
            const { permission, sort } = e;
            const menuItem = { path: permission, sort };
            permissionMenu.push(menuItem);
          }
          if (e.children && Array.isArray(e.children)) {
            getMenus(e.children);
          }
        });
      }
      getMenus(data);
      commit('SET_PERMISSION', permissionMenu);
      return permissionMenu;
    }
  }
};

export default permission;

```

### 请求方案
 项目请求的是使用axios，可以对它添加拦截器来处理我们的请求，也可以处理通过axios.cancelToken重复请求
 ```
 // 设置请求统一信息
import axios from 'axios';
import store from '@/store/index.js';
import qs from 'qs';
import { messages } from './msg-box.js';

const service = axios.create({
  timeout: 300000, // 超时设置
  withCredentials: true // 跨域请求
});

let hasLogoutStatus = false; // 是否某个请求存在需要退出的状态

const queue = []; // 请求队列

const CancelToken = axios.CancelToken; // axios内置的中断方法

/**
 * 拼接请求的url和方法；
 * 同样的`url + method` 可以视为相同的请求
 * @param {Object} config 请求头对象
 */
const token = config => {
  return `${config.url}_${config.method}`;
};

/**
 * 中断重复的请求，并从队列中移除
 * @param {Object} config 请求头对象
 */
const removeQueue = config => {
  for (let i = 0, size = queue.length; i < size; i++) {
    const task = queue[i];
    if (!task) return;
    // 出现401，403状态码中断后续请求
    const isLogout = token(config).includes('logout');
    // 退出接口跳过中断逻辑
    if (!isLogout && hasLogoutStatus) {
      task.token();
      queue.splice(i, 1);
    } else {
      const cancelMethods = ['post', 'put', 'delete']; // 需要中断的请求方式
      const { method } = config;
      if (cancelMethods.includes(method)) {
        if (task.token === token(config)) {
          task.cancel();
          queue.splice(i, 1);
        }
      }
    }
  }
};

/**
 * 请求错误统一处理
 * @param {Object} response 错误对象
 */
const errorHandle = response => {
  // eslint-disable-next-line prettier/prettier
  const { status, data: { message = '' }} = response;
  let msg = message;
  if (!message) {
    switch (status) {
      case 401:
        msg = '您没有权限访问此操作！';
        break;
      case 403:
        msg = '您的登录状态已失效，请重新登录。';
        break;
      case 424:
        msg = response.data.error;
        break;
      default:
        msg = '服务请求异常，请刷新重试。';
    }
  }
  hasLogoutStatus = status === 401 || status === 403;
  if (hasLogoutStatus) {
    messages('error', msg, () => {
      store.dispatch('Logout');
    });
  }
  messages('error', msg);
};

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 中断之前的同名请求
    removeQueue(config);
    // 添加cancelToken
    config.cancelToken = new CancelToken(c => {
      queue.push({ token: token(config), cancel: c });
    });
    // 登录后添加token
    if (store.getters.token) {
      config.headers['Authorization'] =
        store.getters.token.token_type + ' ' + store.getters.token.access_token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 在请求完成后，自动移出队列
    removeQueue(response.config);
    // 关闭全局按钮Loading响应
    store.dispatch('CancalLoading');
    // 错误码处理
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    return response;
  },
  error => {
    const { response } = error;
    if (response) {
      // 错误处理
      errorHandle(response);
      return Promise.reject(response);
    } else {
      // 请求超时
      if (error.message.includes('timeout')) {
        console.log('超时了');
        messages('error', '请求已超时，请刷新或检查互联网连接');
      } else {
        // 断网，可以展示断网组件
        console.log('断网了');
        messages('error', '请检查网络是否已连接');
      }
    }
  }
);

export default {
  get: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      service
        .get(store.getters.api.API + url, { params: data })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    }).catch(error => {
      throw new Error(error);
    });
  },
  post: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      service
        .post(store.getters.api.API + url, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          withCredentials: true,
          transformRequest: [
            data => {
              return qs.stringify(data);
            }
          ]
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    }).catch(error => {
      return Promise.reject(error);
    });
  },
  /**
   * blob下载
   * @param {String} url 请求地址
   * @param {String} method 请求方式 默认`get`
   * @param {Object} data 请求数据
   */
  exportFile({ url = '', data = {}, method = 'get' }) {
    return new Promise((resolve, reject) => {
      const isPost =
        method.toLocaleUpperCase() === 'POST'
          ? {
            headers: { 'Content-Type': 'application/json' },
            data
          }
          : {
            params: data
          };
      const downConfig = {
        withCredentials: true,
        responseType: 'blob',
        ...isPost
      };
      service
        // eslint-disable-next-line no-unexpected-multiline
        [method](store.getters.api.API + url, downConfig)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    }).catch(error => {
      return Promise.reject(error);
    });
  }
};
```
当请求时，可以引用http.js, 也可以挂到vue原型上，在组件内使用this.$http
```
// user.js
import http from '@/utils/http.js';

export function getUser() {
  return http.get('/user');
}

// main.js
Vue.prototype.$http = http;
```
### loading处理
loading可以出处理响应时间有点长场景，这里使用store封装处理方式
```
// loading.js
import Vue from 'vue';

const loading = {
  state: {},
  mutations: {
    SET_LOADING: (state, data) => {
      const isObject =
        Object.prototype.toString.call(data) === '[object Object]';
      if (!isObject) return;
      Object.keys(data).forEach(key => {
        Vue.set(state, key, data[key]);
      });
    },
    CANCAL_LOADING: state => {
      Object.keys(state).forEach(key => {
        Vue.delete(state, key);
      });
    }
  },
  actions: {
    SetLoading({ commit }, data) {
      commit('SET_LOADING', data);
    },
    CancalLoading({ commit }, data) {
      commit('CANCAL_LOADING', data);
    }
  }
};

export default loading;

// http.js
service.interceptors.response.use(
  response => {
    // 关闭全局按钮Loading响应
    store.dispatch('CancalLoading');
    ...
})    
```
组件内使用
```
<el-button :loading="btn.save" @click="handleClick">保存</el-button>

computed: {
    btn() {
        return this.$store.state.loading;
    }
}
methods: {
    handleClick() {
        this.$store.dispatch('SetLoading', { save: true });    
    }
}
```
