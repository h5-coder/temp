<template>
    <div id="editor"></div>
</template>
<script>
const E = require("wangeditor"); // 使用 npm 安装

export default {
    name: "edit-component",
    data() {
        return {};
    },
    props: {
        html: {
            type: String,
            default: "",
        },
    },
    methods: {
        getHtml() {
            const html = this.editor.txt.html();
            console.log("html", html);
            return html;
        },
        getTxt() {
            const txt = this.editor.txt.text();
            return txt;
        },
    },
    created() {},
    mounted() {
        let editor = new E("#editor");
        // editor.customConfig.zIndex = 100;
        // editor.customConfig.menus = [
        //     "head", // 标题
        //     "bold", // 粗体
        //     "fontSize", // 字号
        //     "fontName", // 字体
        //     "italic", // 斜体
        //     "underline", // 下划线
        //     "strikeThrough", // 删除线
        //     "foreColor", // 文字颜色
        //     "backColor", // 背景颜色
        //     // 'link',  // 插入链接
        //     // 'list',  // 列表
        //     "justify", // 对齐方式
        //     "quote", // 引用
        //     // 'emoticon',  // 表情
        //     // 'image',  // 插入图片
        //     // 'table',  // 表格
        //     // 'video',  // 插入视频s
        //     // 'code',  // 插入代码
        //     "undo", // 撤销
        //     "redo", // 重复
        // ];
        // // 自定义字体
        // editor.customConfig.fontNames = [
        //     "宋体",
        //     "仿宋",
        //     "黑体",
        //     "楷体",
        //     "行楷",
        //     "华文楷体",
        //     "微软雅黑",
        //     "Arial",
        //     "Tahoma",
        //     "Verdana",
        // ];
        // // 自定义配置颜色（字体颜色、背景色）
        // editor.customConfig.colors = [
        //     "#000000",
        //     "#eeece0",
        //     "#37456E",
        //     "#1c487f",
        //     "#2461ef",
        //     "#4d80bf",
        //     "#c24f4a",
        //     "#8baa4a",
        //     "#7b5ba1",
        //     "#46acc8",
        //     "#f9963b",
        //     "#ffffff",
        // ];
        // // 自定义字体大小
        // editor.customConfig.fontSize = [
        //     "10px",
        //     "12px",
        //     "14px",
        //     "16px",
        //     "18px",
        //     "20px",
        // ];
        editor.create();
        editor.txt.html(this.html);

        this.editor = editor;
    },
    watch: {
        html(now) {
            this.editor.txt.html(now);
        },
    },
};
</script>
<style scoped>
</style>
