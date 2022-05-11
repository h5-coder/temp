// js
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/';
import '@/../static/js/cookie.js';
// import '@/../static/js/toFixed.js';
import './filters/index.js';
import '@/directives/index.js';
import VueMeta from 'vue-meta';

// css
import '../static/css/reset.css';
import '../static/css/element-ui.css';
import '../static/css/iconfont.css';

// less
import './less/index.less';
// mock 动态引入用
process.env.MOCK && require('./mock/index.js');

Vue.use(ElementUI);
Vue.use(VueMeta);

// Vue.config.silent = true;
Vue.config.productionTip = false;

window.vueVm = new Vue({
    el: '#app',
    data() {
        return {};
    },
    metaInfo: {
        meta: [
            {
                charset: "utf=8",
                vmid: 'viewport',
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
            },
        ],
    },
    router,
    store,
    // 组件
    components: {}
});
