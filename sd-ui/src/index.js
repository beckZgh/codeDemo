
import Loading from '../packages/loading/index.js';

const components = [

];

const install = function(Vue, opts = {}) {

    // 注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.use(Loading.directive);

    Vue.prototype.$loading = Loading.service;
}

// script 加载
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version: '2.13.1',
    Loading,
};

