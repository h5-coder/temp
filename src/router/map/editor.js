const Editor = resolve => require(['@/views/editor.vue'], resolve);

export default {
    path: '/editor',
    component: Editor,
    name: '富文本编辑器'
};
