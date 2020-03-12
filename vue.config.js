const path = require('path');

const port = process.env.port || 8081;
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',
  devServer: {
    port,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://localhost:8000/mock/api/',
        changeOrigin: true,
        pathRewrite: {
          [process.env.VUE_APP_BASE_API]: '',
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        components: resolve('src/components'),
        utils: resolve('src/utils'),
      },
    },
  },
};
