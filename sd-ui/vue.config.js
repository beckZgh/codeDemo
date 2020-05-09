
const { resolve } = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('examples'))
            .set('~', resolve('packages'))

        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options;
            })
    }
}
