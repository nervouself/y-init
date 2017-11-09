# y-init

A simple CLI for scaffolding projects implement by [vue-cli](https://github.com/vuejs/vue-cli).

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g y-init
```

### Usage

``` bash
$ y-init <template-name>#<branch-name> <project-name>
```

Example:

``` bash
# 从 github 下载模板、生成项目
$ y-init username/repo my-project

# 直接从 url 下载模板、生成项目
$ y-init direct:https://my.gitlab.com/username/repo#my-branch my-project --clone

# 或者直接选一个默认模板
$ y-init

# 查看帮助
$ y-init -h
```

### Writing Templates from Scratch

see [vue-cli](https://github.com/vuejs/vue-cli#readme).

### License

[MIT](http://opensource.org/licenses/MIT)
