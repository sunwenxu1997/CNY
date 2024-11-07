import instance from "./instance";
export default function install(Vue) {
    Vue.prototype.$http = instance;
}