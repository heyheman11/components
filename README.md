# React components

To use this package you must do the following steps for this package:

- yarn
- yarn build
- yarn pack

Go to the project you would like to use this package in and do:

- yarn add \$ABSOLUTE_PATH_TO_TARBAR

- update webpack to force your projet to use the one version of react

webpack.conf.js

```js
module.exports = {
  ...,
  resolve: {
    ...,
    alias: { react: require.resolve("react") },
  },
}
```
