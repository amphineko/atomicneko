# ~/amphineko

This repository is a development copy of my homepage ([https://futa.moe/amphineko/](https://futa.moe/amphineko/)), which can be used as a template.

这里是 [https://futa.moe/amphineko/](https://futa.moe/amphineko/) 的开发版本，也可以用来作为制作页面的模版。

Text contents are mainly located at `index.html`. To replace the texts and the picture (`amphineko.png`), can be easily done by editing this file. 

大部分的文本内容储存在 `index.html` 中，修改这个文件即可更改页面的主图片和文本。

For furthermore modification, including color settings and layouts, check SASS files in `assets/stylesheets`. Don't forget `gulp`-ing to rebuild SASS files and reflect your modification.

若要进行更进一步的修改（如配色方案与页面布局），请编辑 `assets/stylesheets` 中的 SASS 文件。完事了别忘记 `gulp` 一下来重新编译 SASS 使更改生效。

## build

To build this repository, run these following commands.

运行下面的指令即可完成编译这个仓库。

```
npm install .
npm run build
```

You may check your `NODE_ENV` before executing `npm install .` to ensure `devDependencies` are installed.

运行 `npm install .` 前，你也许应该检查一下 `NODE_ENV` 来确保 `devDependencies` 被正确安装。

`install` might be pretty hard for Windows users who have poor connections to GitHub (for some well-known reasons), while `npm` is trying to fetch `node-sass-binaries` on GitHub.

直接访问 GitHub 有困难的 Windows 用户在 `install` 时，可能会遇到获取 GitHub 上的 `node-sass-binaries` 导致的问题。
