<template>
    <div class="">
        <editor-component class="editor"></editor-component>
        <vue-tinymce
            v-model="content"
            :setup="setup"
            :setting="setting"
        />
    </div>
</template>

<script>
// import  from ''
// import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
import editorComponent from "@/components/edit-component";
console.log("3eeeeee");
export default {
    // 组件名 每个文件的name都应该是唯一的
    name: "editor",
    // 实例的数据对象
    data() {
        return {
            editor: null,
            content: "<p>html content</p>",
            setting: {
                height: 500,
                toolbar:
                    "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
                toolbar_drawer: "sliding",
                quickbars_selection_toolbar:
                    "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
                plugins: "link image media table lists fullscreen quickbars",
                language: "zh_CN", // 本地化设置
            },
        };
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {
        setup(editor) {
            console.log("setup", editor);
        },
    },
    // 生命周期函数 请求写在created中,echarts写在mounted中
    created() {},
    beforeMount() {},
    mounted() {},

    beforeDestroy() {},
    destroyed() {},
    // 监视
    watch: {},
    // 组件
    components: { editorComponent },
    // 过滤器
    filters: {},
    // 自定义指令
    directive: {},
};
</script>

<style lang="less" scoped>
.editor {
    width: 100%;
    height: 300px;
}
</style>
