# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 发布到自定义域名
echo "把域名放到CNAME文件中"
echo 'myblog.mqmydream.com' > CNAME

# 百度统计埋点
# echo "添加代码"
# cd $sourcePath
# sed -i '' '/<html/a\
# <script>
# var _hmt = _hmt || [];
# (function() {
#   var hm = document.createElement("script");
#   hm.src = "https://hm.baidu.com/hm.js?3b7b037f2730cbbd6dc9d707cca91e95";
#   var s = document.getElementsByTagName("script")[0]; 
#   s.parentNode.insertBefore(hm, s);
# })();
# </script>
# ' index.html
# echo "添加代码执行完毕"



# 进入生成的文件夹
cd docs/.vuepress/dist
# echo 'blog.mqmydream.com' > CNAME

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:ZiSeFeng/blog.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ZiSeFeng/blog.git master:gh-pages

cd -

#!/bin/bash
#获取全路径
# basepath=$(cd `dirname $0`; pwd)
# sourcePath=$basepath'/docs/.vuepress/dist/'
# target=root@xx.xxx.xxx.xx:/www/
# # 拉去git上最新数据
# echo "开始更新项目"
# git pull
# echo "更新完毕"

# echo "开始构建项目"
# yarn docs:build
# echo "构建完毕"

# echo "添加代码"
# cd $sourcePath
# sed -i '' '/<html/a\
# <script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?xxxx你的key";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();</script>' index.html
# echo "添加代码执行完毕"

# echo "开始上传$sourcePath 到 $target"
# #把dist/ 文件上传到 服务器 /www/
# echo "开始上传---------"

# for (( ; ; ))
# do
#   rsync -avzP $sourcePath -e ssh $target > run.log 2>&1

#   if [ $? -eq 0 ] 
#   then
#     echo "上传成功！"
#     break
#   fi
# done
