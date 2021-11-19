const Index = resolve => require(['@/views/index/index.vue'], resolve);

export default {
    path: '/index',
    component: Index,
    name: '主页'
};
