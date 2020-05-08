const { resolve, join, parse } = require('path');
const globby = require('globby');

module.exports = app => {

    const AppPath = resolve(__dirname);
    const context = app['context'];

    const fileAbsolutePath = {
        config: join(AppPath, 'config'),
        middleware: join(AppPath, 'middleware'),
        service: join(AppPath, 'service'),
    };

    Object.keys(fileAbsolutePath).forEach(v => {
        const path = fileAbsolutePath[v];
        const prop = v;

        const files = globby.sync('**/*.js', {
            cwd: path
        });

        if (prop !== 'middleware') {
            context[prop] = {}; // 初始化对象
        }

        files.forEach(file => {
            // 文件的名称作 key 挂载子对象上
            const filename = parse(file).name;

            // 导入内容
            const content = require(join(path, file));

            if (prop === 'middleware') {
                if (filename in context['config']) {
                    const plugin = content(context['config'][filename]);
                    // 加载中间件
                    app.use(plugin);
                }

                return;
            }

            // 配置文件处理
            if (prop === 'config' && content) {
                context[prop] = Object.assign({}, context[prop], content);
                return;
            }

            // 挂载 service
            context[prop][filename] = content;

        })
    });
}
