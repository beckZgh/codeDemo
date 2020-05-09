
import SdTest from './test'

const components = [
    SdTest
];

const install = Vue => {
    if (install.installed) return;

    install.installed = true;

    components.forEach(component => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
}
