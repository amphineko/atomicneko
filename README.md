# ~/amphineko

This repository is a development copy of my homepage (https://futa.moe/amphineko/), which can be used as a template.

Visit https://amphineko.github.io/amphineko/ for live deployment of `master` branch.

Text contents are mainly located at `index.html`. To replace the texts and the picture (`amphineko.png`), can be easily done by editing this file. 

For furthermore modification, including color settings and layouts, check `index.scss` and `stylesheets/*.scss`. Don't forget to run `webpack` to rebuild SASS files and reflect your modification.

---

这里是 https://futa.moe/amphineko/ 的开发版本，也可以用来作为制作页面的模版。

访问 https://amphineko.github.io/amphineko/ 可以查看 `master` 分支的最新部署。

大部分的文本内容储存在 `index.html` 中，修改这个文件即可更改页面的主图片和文本。

若要进行更进一步的修改（如配色方案与页面布局），请编辑 `index.scss` 与 `stylesheets/*.scss`。完事了别忘记 `webpack` 一下来重新编译 SASS 使更改生效。

## build

To build this repository, run these following commands.

```
npm install .
npm run build
```

You may check your `NODE_ENV` before executing `npm install .` to ensure `devDependencies` are installed.

`install` might be pretty hard for Windows users who have poor connections to GitHub (for some well-known reasons), while `npm` is trying to fetch `node-sass-binaries` on GitHub.

```
npm set sass_binary_site https://npm.taobao.org/mirrors/node-sass
```

---

运行下面的指令即可完成编译这个仓库。

```
npm install .
npm run build
```

运行 `npm install .` 前，你也许应该检查一下 `NODE_ENV` 来确保 `devDependencies` 被正确安装。

直接访问 GitHub 有困难的 Windows 用户在 `install` 时，可能会遇到获取 GitHub 上的 `node-sass-binaries` 导致的问题。

```
npm set sass_binary_site https://npm.taobao.org/mirrors/node-sass
```

## known "issue"

The chemical symbol in the name may flash on page load, especially on Chrome.  
This is a bug specific to Chrome (and Blink browsers). However this won't be fixed, because it's caused by Chrome and left not fixed for years.  
Check out this issue for solution if this bothers you. (Thanks to @Nyaasu66)

https://github.com/amphineko/amphineko/issues/15

---

使用 Chrome 时，页面上部名字中的化学符号可能会闪烁。  
这是一个 Chrome (和使用了 Blink 的浏览器) 特有的 Bug。因为这是由 Chrome 产生并且多年没有修复的问题，所以在这里也不会修复。  
如果这给你产生了困扰，以下 issue 提供了一个解决方法。(感谢 @Nyaasu66)

https://github.com/amphineko/amphineko/issues/15
