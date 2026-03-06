module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // tailwind.config.js의 기본 font-size 기준
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
}

/* 1px 그대로 유지됨 */
// border: 1PX solid black; 