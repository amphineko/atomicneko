# ~/amphineko

This repository is a development copy of my homepage ([https://futa.moe/amphineko/](https://futa.moe/amphineko/)), which can be used as a template.

这个仓库是饼干主页 ([https://futa.moe/amphineko/](https://futa.moe/amphineko/)) 的开发副本，这个主页可以用来作为模版。

Text contents are mainly located at `index.html`. To replace the texts and the picture (`amphineko.png`), can be easily done by editing this file. 

大部分的内容在 `index.html` 里。通过编辑这个文件可以修改主页图片和文字。

For furthermore modification, including color settings and layouts, check SASS files in `assets/stylesheets`. Don't forget `gulp`-ing to rebuild SASS files and reflect your modification.

若要进行更深入的修改（如配色方案与页面布局），请编辑 `assets/stylesheets` 中的 SASS。完事了别忘记 `gulp` 一下来重新构建 SASS 使更改生效。

## build

To build this repository, run these following commands:

构建主页很简单，运行下面的命令：

```
npm install .
npm run build
```

You may check your `NODE_ENV` before executing `npm install .` to ensure `devDependencies` are installed.

`npm install .` 前，你可以检查一下 `NODE_ENV` 来确保 `devDependencies` 已经正确安装。

`install` might be pretty hard for Windows users who have poor connections to GitHub (for some well-known reasons), while `npm` is trying to fetch `node-sass-binaries` on GitHub.

直接访问 GitHub 有困难的 Windows 用户，在 install 的时候可能会遇到因获取 GitHub 上的 node-sass-binaries 导致的问题。

