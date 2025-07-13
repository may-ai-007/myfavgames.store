#!/bin/bash

# 构建项目
npm run build

# 将dist目录下的文件复制到根目录
cp -r dist/* .

# 添加文件到Git
git add .gitignore assets fav.svg index.html vite.svg

# 提交更改
git commit -m "更新网站文件"

# 推送到GitHub
git push -f origin main

echo "部署完成！" 