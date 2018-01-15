# ~/amphineko

This repository is a development copy of my homepage ([https://futa.moe/amphineko/](https://futa.moe/amphineko/)), which can be used as a template.

Text contents are mainly located at `index.html`. To replace the texts and the picture (`amphineko.png`), can be easily done by editing this file. 

For futuremore modification, including color settings and layouts, check SASS files in `assets/stylesheets`. Don't forget `gulp`-ing to rebuild SASS files and reflect your modification.

## build

To build this repository, run these following commands:

```
npm install .
npm run build
```

You may check your `NODE_ENV` before executing `npm install .` to ensure `devDependencies` are installed.

`install` might be pretty hard for Windows users who have poor connections to GitHub (for some well-known reasons), while `npm` is trying to fetch `node-sass-binaries` on GitHub.
