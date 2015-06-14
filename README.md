# es6-microframework

A quick micro-framework for starting a site with ES6+ReactJS. 

ES6 modules are transpiled using Babel to AMD and dynamicly loaded by site-init via DOM element data attributes. 

Babel is also set up to transpile JSX modules automatically so you can use ReactJS as a module.

site-init.js will call an init function on a module passing the dom element from which the data-attribute came from.

hello-world.jsx is an example ReactJS module that mounts itself on the page.

## Install

```sh
$ npm install
$ grunt
```

## Grunt Tasks

```sh
$ grunt dev # runs default tasks and sets up a watch and connect server at 8080
```

```sh
$ grunt release # compiles and minifies libraries ready for release
```
## Auto Loading a Module into a Page

```html
<div data-site-module="my-module"></div>
```

```js
// js/my-module.js
import $ from 'jquery';
default export {
    init(ele) {
      $(ele).html('hello world')
    }
}
```
