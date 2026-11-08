# 河北东升索具网站 · 静态版

从提供的 DedeCMS 网站备份中提取。无需 PHP、数据库、Node.js 或编译步骤，适合 GitHub Pages。

## 发布到 GitHub Pages（推荐）

1. 在 GitHub 新建仓库，例如 `dssling-site`。
2. 将本压缩包**解压后的内容**放到仓库根目录，确保根目录直接有 `index.html`，不要上传 ZIP 本身，也不要多套一层文件夹。
3. 文件较多，推荐使用 GitHub Desktop：克隆新仓库，将文件复制进去，Commit 后 Push。务必包含 `.nojekyll` 文件。
4. 打开仓库 **Settings → Pages**。
5. Source 选择 **Deploy from a branch**。
6. Branch 选择 **main**，目录选择 **/(root)**，点击 Save。
7. 等待 GitHub Pages 部署完成，访问 `https://你的用户名.github.io/dssling-site/`。实际网址以 Pages 设置页显示为准。

若仓库命名为 `你的用户名.github.io`，网站地址就是 `https://你的用户名.github.io/`。

## 命令行上传（可选）

在解压后的目录打开终端，将下列地址替换成自己的仓库地址：

```sh
git init
git add .
git commit -m "Add static website"
git branch -M main
git remote add origin https://github.com/你的用户名/dssling-site.git
git push -u origin main
```

## 本地浏览

可直接打开 `index.html`。更推荐用本地静态服务器预览：

```sh
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 已做的处理

- 保留原有中英文网站页面、产品图片、CSS 和前端脚本，不重做原站视觉设计。
- 将站内绝对路径改成相对路径，兼容 GitHub Pages 仓库子目录。
- 修复部分英文目录大小写、旧页面资源错误路径，统一页面文本为 UTF-8。
- 排除 SQL 数据库备份、后台、安装程序、服务器配置与 PHP 程序；本包不包含原始源码压缩包。
- 移除部分旧统计、广告脚本及原始备份缺失的脚本引用。

## 边界与注意事项

这是历史网站的静态展示版本，不包含 CMS 管理后台、数据库更新、服务端搜索或表单处理。以后修改内容需要编辑 HTML 后重新提交。

原始备份本身缺少部分历史产品页面、隐私页面及插件，具体路径见 `SOURCE-NOTES.md`；未擅自补写这些业务内容。Flash 已被现代浏览器淘汰，旧 Flash 功能不保证可用。原站采用固定宽度布局，本次未做手机版重设计。

公开仓库前，请确认网站图片、产品资料及页面公开联系方式允许对外展示。**不要把原始 ZIP、SQL 文件或 CMS 后台文件上传到公开仓库。**
