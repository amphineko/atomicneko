# atomicneko template

**!!! ATTENTION !!!**

This branch is still in development. I'm currently working on moving to next.js and React.

In the future, it will support dynamic server-side contents. The main goal is to fetch some stats of linked accounts, which are not fetch-able from the browser due to CORS issues.

---

This repository is the repository of my homepage (https://futa.moe/amphineko/) that can be used as a template.

Visit https://amphineko.github.io/amphineko/ for a live deployment of the `master` branch.

Editable contents are mainly located in `index.html`. Simply edit this file to replace the texts and the picture.

For further modifications, including color settings, background images, and layouts, check `index.css` and `stylesheets/*.css`.
Don't forget to run a `npm run build` to rebuild files and reflect your modification.

---

这里是 https://futa.moe/amphineko/ 的代码库，也可以用来作为制作页面的模版。

访问 https://amphineko.github.io/amphineko/ 可以查看 `master` 分支的最新部署。

大部分的文本内容储存在 `index.html` 中，修改这个文件即可更改页面的主图片和文本。

若要进行更进一步的修改（如配色方案、背景图片与页面布局），请编辑 `index.css` 与 `stylesheets/*.css`。
完事了别忘记 `npm run build` 一下来重新编译使更改生效。

## warning

This repository contains copyrighted content, including the profile picture `amphineko.png`, `badcable.png`, etc.
These assets are specially licensed to the repository owner only.

Please be cautious when using these assets.

You probably want to replace these assets with your own assets, all of them, before deploying to your websites.

---

请注意，本库中包含版权内容，包括 `amphineko.png`、`badcable.png` 等。
这些图片都是特别而仅授权给本代码库拥有者使用的。

在使用这些素材的时候，请小心。

你应该在部署到你的网站或分发之前，将这些所有的版权图片替换为你自己的图片。

## help wanted!

This repository is open source, and you can contribute to it.
Please don't hesitate to send pull requests when you find any incorrectness or improvements.

You may also see [issues](https://github.com/amphineko/amphineko/issues) to find ongoing problems.

---

这是一项开源项目，你可以在这里提交 pull requests 来帮助改进这个项目。

同时你可以在 [issues](https://github.com/amphineko/amphineko/issues) 里找到现在正在处理的问题。

## build

To build this project and retrieve a static website, run these following commands.

```console
$ yarn
$ yarn build
$ yarn export
```

You may check your `NODE_ENV` before executing `yarn` to ensure `devDependencies` are installed.

---

运行下面的指令即可完成编译这个仓库，并产生一个静态网站。

```console
$ yarn
$ yarn build
$ yarn export
```

运行 `yarn` 前，你也许应该检查一下 `NODE_ENV` 来确保 `devDependencies` 被正确安装。

## roadmap

-   [ ] Move to next.js and React components (in progress in this branch)
-   [x] -   Create a running demo with a simple header
