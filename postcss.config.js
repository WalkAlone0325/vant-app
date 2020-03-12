module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 设备的宽度/10
      propList: ['*'], // 表示对所有的设备都起作用
    },
  },
};
