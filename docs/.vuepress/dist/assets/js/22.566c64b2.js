(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{358:function(s,n,a){"use strict";a.r(n);var e=a(14),t=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("公司做的大部分都是后台管理项目，剔除每个项目的业务逻辑，其实都可以通用的一套模板来做")]),s._v(" "),a("h3",{attrs:{id:"登录逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录逻辑","aria-hidden":"true"}},[s._v("#")]),s._v(" 登录逻辑")]),s._v(" "),a("p",[s._v("每个系统都有自己的登录登出逻辑，而我们前端所要做的其实请求后台，拿到登录权限，带上登录权限，获取用户信息和菜单信息。在vue项目开发当中，我们一般都是在"),a("strong",[s._v("全局路由钩子")]),s._v("做这一系列判断")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("router.beforeEach(async(to, from, next) => {\n NProgress.start();\n await store.dispatch('SetConfigApi'); //获取配置\n await store.dispatch('SetApi'); // 设置基本配置\n const token = await store.dispatch('getToken'); //获取token\n if (token) {\n   if (!store.getters.userInfo) {\n     await store.dispatch('GetUser'); //获取用户信息\n     const menuList = await store.dispatch('GetMenu', localRoute); //获取菜单\n     await store.dispatch('GenerateRoutes', localRoute);\n     router.addRoutes(store.getters.addRoutes);\n   } else {\n     next()\n   }\n } else {\n   if (whiteList.includes(to.path)) {\n     // 在免登录白名单，直接进入\n     next()\n   } else {\n     window.location.href = store.getters.api.IPORTAL_LOCAL_API;\n     NProgress.done();\n   }\n }\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("当用户进入系统的时候，先获取系统的配置信息，这个配置信息可以是前端json文件，或者是后台接口；用这种方式可以灵活的修改项目中的配置，而不用每次打包进入项目，直接可以要运维童鞋修改对应的按钮配置信息；")]),s._v(" "),a("h3",{attrs:{id:"菜单权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菜单权限","aria-hidden":"true"}},[s._v("#")]),s._v(" 菜单权限")]),s._v(" "),a("p",[s._v("之前的菜单路由直接是写死在前端，但是当我们直接访问这个路由时，用户还是可以进入到这个功能页面；后来直接改成动态添加路由的方式router.addRoutes.")]),s._v(" "),a("ol",[a("li",[s._v("前端先获取菜单列表；")]),s._v(" "),a("li",[s._v("根据获取菜单列表循环添加用户菜单路由集合；")]),s._v(" "),a("li",[s._v("动态添加路由；")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import { asyncRoutes, homePage } from '@/router/modules/routes';\n\n/**\n * 通过路由path判断是否与当前用户权限匹配\n * @param permissionMenu\n * @param route\n */\nfunction hasPermission(permissionMenu, route) {\n  return (\n    permissionMenu.findIndex(v => {\n      const key = v.path || v;\n      const sort = v.sort || '';\n      route.sort = sort; // 排序\n      return route.path.includes(key);\n    }) > -1\n  );\n}\n\n/**\n * 递归过滤异步路由表，返回符合用户权限的路由表\n * @param routes asyncRouterMap\n * @param permissionMenu\n */\nfunction filterAsyncRouter(routes, permissionMenu) {\n  const menu = [];\n  routes.forEach(route => {\n    const tmp = { ...route };\n    if (hasPermission(permissionMenu, tmp)) {\n      if (tmp.children) {\n        tmp.children = filterAsyncRouter(route.children, permissionMenu);\n      }\n      menu.push(tmp);\n    }\n  });\n  return menu;\n}\n\nconst permission = {\n  state: {\n    permissionList: [],\n    routes: [],\n    addRoutes: []\n  },\n  mutations: {\n    SET_PERMISSION: (state, list) => {\n      state.permissionList = [...list];\n    },\n    SET_ROUTES: (state, routes) => {\n      state.addRoutes = [...routes];\n      state.routes = [homePage, ...routes];\n    }\n  },\n  actions: {\n    async GenerateRoutes({ dispatch, commit }, data) {\n      const permissionList = await dispatch('GetMeunPermission', data);\n      const routes = filterAsyncRouter(asyncRoutes, permissionList);\n      commit('SET_ROUTES', routes);\n    },\n    // 遍历菜单获取Permission字段\n    async GetMeunPermission({ commit }, data) {\n      const permissionMenu = [];\n\n      function getMenus(menuData) {\n        menuData.forEach(e => {\n          if (e.permission) {\n            // 需要排序字段\n            const { permission, sort } = e;\n            const menuItem = { path: permission, sort };\n            permissionMenu.push(menuItem);\n          }\n          if (e.children && Array.isArray(e.children)) {\n            getMenus(e.children);\n          }\n        });\n      }\n      getMenus(data);\n      commit('SET_PERMISSION', permissionMenu);\n      return permissionMenu;\n    }\n  }\n};\n\nexport default permission;\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br")])]),a("h3",{attrs:{id:"请求方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求方案","aria-hidden":"true"}},[s._v("#")]),s._v(" 请求方案")]),s._v(" "),a("p",[s._v("项目请求的是使用axios，可以对它添加拦截器来处理我们的请求，也可以处理通过axios.cancelToken重复请求")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 设置请求统一信息\nimport axios from 'axios';\nimport store from '@/store/index.js';\nimport qs from 'qs';\nimport { messages } from './msg-box.js';\n\nconst service = axios.create({\n timeout: 300000, // 超时设置\n withCredentials: true // 跨域请求\n});\n\nlet hasLogoutStatus = false; // 是否某个请求存在需要退出的状态\n\nconst queue = []; // 请求队列\n\nconst CancelToken = axios.CancelToken; // axios内置的中断方法\n\n/**\n* 拼接请求的url和方法；\n* 同样的`url + method` 可以视为相同的请求\n* @param {Object} config 请求头对象\n*/\nconst token = config => {\n return `${config.url}_${config.method}`;\n};\n\n/**\n* 中断重复的请求，并从队列中移除\n* @param {Object} config 请求头对象\n*/\nconst removeQueue = config => {\n for (let i = 0, size = queue.length; i < size; i++) {\n   const task = queue[i];\n   if (!task) return;\n   // 出现401，403状态码中断后续请求\n   const isLogout = token(config).includes('logout');\n   // 退出接口跳过中断逻辑\n   if (!isLogout && hasLogoutStatus) {\n     task.token();\n     queue.splice(i, 1);\n   } else {\n     const cancelMethods = ['post', 'put', 'delete']; // 需要中断的请求方式\n     const { method } = config;\n     if (cancelMethods.includes(method)) {\n       if (task.token === token(config)) {\n         task.cancel();\n         queue.splice(i, 1);\n       }\n     }\n   }\n }\n};\n\n/**\n* 请求错误统一处理\n* @param {Object} response 错误对象\n*/\nconst errorHandle = response => {\n // eslint-disable-next-line prettier/prettier\n const { status, data: { message = '' }} = response;\n let msg = message;\n if (!message) {\n   switch (status) {\n     case 401:\n       msg = '您没有权限访问此操作！';\n       break;\n     case 403:\n       msg = '您的登录状态已失效，请重新登录。';\n       break;\n     case 424:\n       msg = response.data.error;\n       break;\n     default:\n       msg = '服务请求异常，请刷新重试。';\n   }\n }\n hasLogoutStatus = status === 401 || status === 403;\n if (hasLogoutStatus) {\n   messages('error', msg, () => {\n     store.dispatch('Logout');\n   });\n }\n messages('error', msg);\n};\n\n// 请求拦截器\nservice.interceptors.request.use(\n config => {\n   // 中断之前的同名请求\n   removeQueue(config);\n   // 添加cancelToken\n   config.cancelToken = new CancelToken(c => {\n     queue.push({ token: token(config), cancel: c });\n   });\n   // 登录后添加token\n   if (store.getters.token) {\n     config.headers['Authorization'] =\n       store.getters.token.token_type + ' ' + store.getters.token.access_token;\n   }\n   return config;\n },\n error => {\n   return Promise.reject(error);\n }\n);\n\n// 响应拦截器\nservice.interceptors.response.use(\n response => {\n   // 在请求完成后，自动移出队列\n   removeQueue(response.config);\n   // 关闭全局按钮Loading响应\n   store.dispatch('CancalLoading');\n   // 错误码处理\n   if (response.status !== 200) {\n     return Promise.reject(response);\n   }\n   return response;\n },\n error => {\n   const { response } = error;\n   if (response) {\n     // 错误处理\n     errorHandle(response);\n     return Promise.reject(response);\n   } else {\n     // 请求超时\n     if (error.message.includes('timeout')) {\n       console.log('超时了');\n       messages('error', '请求已超时，请刷新或检查互联网连接');\n     } else {\n       // 断网，可以展示断网组件\n       console.log('断网了');\n       messages('error', '请检查网络是否已连接');\n     }\n   }\n }\n);\n\nexport default {\n get: (url, data = {}) => {\n   return new Promise((resolve, reject) => {\n     service\n       .get(store.getters.api.API + url, { params: data })\n       .then(response => {\n         resolve(response.data);\n       })\n       .catch(error => {\n         reject(error);\n       });\n   }).catch(error => {\n     throw new Error(error);\n   });\n },\n post: (url, data = {}) => {\n   return new Promise((resolve, reject) => {\n     service\n       .post(store.getters.api.API + url, data, {\n         headers: {\n           'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'\n         },\n         withCredentials: true,\n         transformRequest: [\n           data => {\n             return qs.stringify(data);\n           }\n         ]\n       })\n       .then(response => {\n         resolve(response.data);\n       })\n       .catch(error => {\n         reject(error);\n       });\n   }).catch(error => {\n     return Promise.reject(error);\n   });\n },\n /**\n  * blob下载\n  * @param {String} url 请求地址\n  * @param {String} method 请求方式 默认`get`\n  * @param {Object} data 请求数据\n  */\n exportFile({ url = '', data = {}, method = 'get' }) {\n   return new Promise((resolve, reject) => {\n     const isPost =\n       method.toLocaleUpperCase() === 'POST'\n         ? {\n           headers: { 'Content-Type': 'application/json' },\n           data\n         }\n         : {\n           params: data\n         };\n     const downConfig = {\n       withCredentials: true,\n       responseType: 'blob',\n       ...isPost\n     };\n     service\n       // eslint-disable-next-line no-unexpected-multiline\n       [method](store.getters.api.API + url, downConfig)\n       .then(response => {\n         resolve(response);\n       })\n       .catch(error => {\n         reject(error);\n       });\n   }).catch(error => {\n     return Promise.reject(error);\n   });\n }\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br"),a("span",{staticClass:"line-number"},[s._v("157")]),a("br"),a("span",{staticClass:"line-number"},[s._v("158")]),a("br"),a("span",{staticClass:"line-number"},[s._v("159")]),a("br"),a("span",{staticClass:"line-number"},[s._v("160")]),a("br"),a("span",{staticClass:"line-number"},[s._v("161")]),a("br"),a("span",{staticClass:"line-number"},[s._v("162")]),a("br"),a("span",{staticClass:"line-number"},[s._v("163")]),a("br"),a("span",{staticClass:"line-number"},[s._v("164")]),a("br"),a("span",{staticClass:"line-number"},[s._v("165")]),a("br"),a("span",{staticClass:"line-number"},[s._v("166")]),a("br"),a("span",{staticClass:"line-number"},[s._v("167")]),a("br"),a("span",{staticClass:"line-number"},[s._v("168")]),a("br"),a("span",{staticClass:"line-number"},[s._v("169")]),a("br"),a("span",{staticClass:"line-number"},[s._v("170")]),a("br"),a("span",{staticClass:"line-number"},[s._v("171")]),a("br"),a("span",{staticClass:"line-number"},[s._v("172")]),a("br"),a("span",{staticClass:"line-number"},[s._v("173")]),a("br"),a("span",{staticClass:"line-number"},[s._v("174")]),a("br"),a("span",{staticClass:"line-number"},[s._v("175")]),a("br"),a("span",{staticClass:"line-number"},[s._v("176")]),a("br"),a("span",{staticClass:"line-number"},[s._v("177")]),a("br"),a("span",{staticClass:"line-number"},[s._v("178")]),a("br"),a("span",{staticClass:"line-number"},[s._v("179")]),a("br"),a("span",{staticClass:"line-number"},[s._v("180")]),a("br"),a("span",{staticClass:"line-number"},[s._v("181")]),a("br"),a("span",{staticClass:"line-number"},[s._v("182")]),a("br"),a("span",{staticClass:"line-number"},[s._v("183")]),a("br"),a("span",{staticClass:"line-number"},[s._v("184")]),a("br"),a("span",{staticClass:"line-number"},[s._v("185")]),a("br"),a("span",{staticClass:"line-number"},[s._v("186")]),a("br"),a("span",{staticClass:"line-number"},[s._v("187")]),a("br"),a("span",{staticClass:"line-number"},[s._v("188")]),a("br"),a("span",{staticClass:"line-number"},[s._v("189")]),a("br"),a("span",{staticClass:"line-number"},[s._v("190")]),a("br"),a("span",{staticClass:"line-number"},[s._v("191")]),a("br"),a("span",{staticClass:"line-number"},[s._v("192")]),a("br"),a("span",{staticClass:"line-number"},[s._v("193")]),a("br"),a("span",{staticClass:"line-number"},[s._v("194")]),a("br"),a("span",{staticClass:"line-number"},[s._v("195")]),a("br"),a("span",{staticClass:"line-number"},[s._v("196")]),a("br"),a("span",{staticClass:"line-number"},[s._v("197")]),a("br"),a("span",{staticClass:"line-number"},[s._v("198")]),a("br"),a("span",{staticClass:"line-number"},[s._v("199")]),a("br"),a("span",{staticClass:"line-number"},[s._v("200")]),a("br"),a("span",{staticClass:"line-number"},[s._v("201")]),a("br"),a("span",{staticClass:"line-number"},[s._v("202")]),a("br"),a("span",{staticClass:"line-number"},[s._v("203")]),a("br"),a("span",{staticClass:"line-number"},[s._v("204")]),a("br"),a("span",{staticClass:"line-number"},[s._v("205")]),a("br"),a("span",{staticClass:"line-number"},[s._v("206")]),a("br"),a("span",{staticClass:"line-number"},[s._v("207")]),a("br"),a("span",{staticClass:"line-number"},[s._v("208")]),a("br"),a("span",{staticClass:"line-number"},[s._v("209")]),a("br"),a("span",{staticClass:"line-number"},[s._v("210")]),a("br"),a("span",{staticClass:"line-number"},[s._v("211")]),a("br"),a("span",{staticClass:"line-number"},[s._v("212")]),a("br"),a("span",{staticClass:"line-number"},[s._v("213")]),a("br"),a("span",{staticClass:"line-number"},[s._v("214")]),a("br")])]),a("p",[s._v("当请求时，可以引用http.js, 也可以挂到vue原型上，在组件内使用this.$http")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// user.js\nimport http from '@/utils/http.js';\n\nexport function getUser() {\n  return http.get('/user');\n}\n\n// main.js\nVue.prototype.$http = http;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"loading处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading处理","aria-hidden":"true"}},[s._v("#")]),s._v(" loading处理")]),s._v(" "),a("p",[s._v("loading可以出处理响应时间有点长场景，这里使用store封装处理方式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// loading.js\nimport Vue from 'vue';\n\nconst loading = {\n  state: {},\n  mutations: {\n    SET_LOADING: (state, data) => {\n      const isObject =\n        Object.prototype.toString.call(data) === '[object Object]';\n      if (!isObject) return;\n      Object.keys(data).forEach(key => {\n        Vue.set(state, key, data[key]);\n      });\n    },\n    CANCAL_LOADING: state => {\n      Object.keys(state).forEach(key => {\n        Vue.delete(state, key);\n      });\n    }\n  },\n  actions: {\n    SetLoading({ commit }, data) {\n      commit('SET_LOADING', data);\n    },\n    CancalLoading({ commit }, data) {\n      commit('CANCAL_LOADING', data);\n    }\n  }\n};\n\nexport default loading;\n\n// http.js\nservice.interceptors.response.use(\n  response => {\n    // 关闭全局按钮Loading响应\n    store.dispatch('CancalLoading');\n    ...\n})    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("组件内使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<el-button :loading="btn.save" @click="handleClick">保存</el-button>\n\ncomputed: {\n    btn() {\n        return this.$store.state.loading;\n    }\n}\nmethods: {\n    handleClick() {\n        this.$store.dispatch(\'SetLoading\', { save: true });    \n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])},[],!1,null,null,null);n.default=t.exports}}]);