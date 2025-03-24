// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/shops/' : '/'
}



// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   runtimeCompiler: true, // setup 문법 활성화
//   chainWebpack: (config) => {
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap((options) => {
//         options.compilerOptions = {
//           isCustomElement: (tag) => tag.startsWith('custom-'),
//         };
//         return options;
//       });
//   },
// });
