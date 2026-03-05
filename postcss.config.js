module.exports = {
  plugins: {
    'tailwindcss': {}, // 1. 테일윈드가 먼저 클래스를 CSS(px)로 변환
    'autoprefixer': {},
    'postcss-pxtorem': { // 2. 만들어진 px를 rem으로 변환
      rootValue: 16,
      propList: ['*'],
    },
  },
}

/* 1px 그대로 유지됨 */
// border: 1PX solid black; 