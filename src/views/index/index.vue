<template>
    <div class="">
        <my-marquee :list="list"></my-marquee>
        <!-- 收件人组件： -->
        <div
            class="div"
            ref="div"
        ></div>
        <el-button @click="btn('div')">按钮</el-button>
        <el-button @click="go('/scale')">跳转</el-button>

    </div>
</template>

<script>
// import  from ''
// import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
import myMarquee from "@/components/marquee";

export default {
    // 组件名 每个文件的name都应该是唯一的
    name: "index",
    // 实例的数据对象
    data() {
        return {
            list: [],
        };
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {
        requestFullscreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            }
        },
        btn(eleName) {
            this.requestFullscreen(this.$refs[eleName]);
        },
        go(path) {
            this.$router.push(path);
        },
    },
    // 生命周期函数 请求写在created中,echarts写在mounted中
    created() {
        this.$meta().refresh();
    },
    beforeMount() {},
    mounted() {
        setTimeout(() => {
            this.list = [`<p>marqueemarqueemarqueemarquee</p>`];
        }, 500);
    },

    beforeDestroy() {},
    destroyed() {},
    // 监视
    watch: {},
    // 组件
    components: { myMarquee },
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
.div {
    width: 100%;
    height: 100px;
    background: red;
}
</style>
