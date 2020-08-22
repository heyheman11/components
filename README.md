# dz-base-components
![npm](https://img.shields.io/npm/v/dz-base-components)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](heyheman11.github.io/components/)

Yet another react component library! 

A place where I can create components and test them.

```sh
> yarn add dz-base-components
```

## Components

- SideBar
- Card
- Button

## Using

This library only supports es5 import/export syntax.

React and react-dom are peer dependencies, so they are not bundled in this package. To avoid bundling duplicate react packages you can do the following in your webpack config.

```js
module.exports = {
  ...,
  resolve: {
    ...,
    alias: { react: require.resolve("react") },
  },
}
```
