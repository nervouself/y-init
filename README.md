# y-template-cli

A simple CLI for scaffolding front-end projects implement by [vue-cli](https://github.com/vuejs/vue-cli).

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g y-template-cli
```

### Usage

``` bash
$ y-template init <template-name>#<branch-name> <project-name>
```

Example:

``` bash
$ y-template init direct:https://github.com/vuejs-templates/webpack-simple.git my-project --clone
```

The above command pulls the template from [vuejs-templates/webpack-simple](https://github.com/vuejs-templates/webpack-simple), prompts for some information, and generates the project at `./my-project/`.

### Writing Templates from Scratch

see [vue-cli](https://github.com/vuejs/vue-cli#readme).

### License

[MIT](http://opensource.org/licenses/MIT)
