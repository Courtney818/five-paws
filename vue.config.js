/* eslint-disable import/extensions */
/* eslint-disable global-require */
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: require('./postcss.config.js'),
      },
    },
  },
});
