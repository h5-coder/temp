<template>
    <div class="">
        <my-marquee :list="list"></my-marquee>
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
            list: ["66666666666"]
        };
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {},
    // 生命周期函数 请求写在created中,echarts写在mounted中
    created() {},
    beforeMount() {},
    mounted() {},

    beforeDestroy() {},
    destroyed() {},
    // 监视
    watch: {},
    // 组件
    components: { myMarquee },
    // 过滤器
    filters: {},
    // 自定义指令
    directive: {}
};
</script>

<style lang="less" scoped>
</style>
