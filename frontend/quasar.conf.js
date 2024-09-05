module.exports = function (ctx) {
    return {
      build: {
        vueRouterMode: 'history'
      },
      devServer: {
        open: true // 打开浏览器窗口
      },
      framework: {
        components: ['QPage', 'QCard', 'QCardSection', 'QInput', 'QBtn', 'QList', 'QItem', 'QItemSection']
      }
    };
  };
  