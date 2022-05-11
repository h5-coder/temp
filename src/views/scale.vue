<template>
    <div class="">
        <el-button @click="$router.go(-1)">返回</el-button>

        <p>scale</p>
        <p>scale</p>
        <p>scale</p>
        <p>scale</p>
        <p>scale</p>
        <p>scale</p>

    </div>
</template>

<script>
// import  from ''
// import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
    // 组件名 每个文件的name都应该是唯一的
    name: "scale",
    // 实例的数据对象
    data() {
        return {
            remove: null,
        };
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {},
    // 生命周期函数 请求写在created中,echarts写在mounted中
    created() {
        const { set, remove } = this.$meta().addApp("viewport");

        set({
            meta: [
                {
                    vmid: "viewport",
                    name: "viewport",
                    content:
                        "initial-scale=1.0, minimum-scale=0.1, maximum-scale=2",
                },
            ],
        });
        this.remove = remove;
    },
    beforeMount() {},
    mounted() {},
    beforeDestroy() {
        // this.remove();
    },
    destroyed() {},
    // 监视
    watch: {},
    // 组件
    components: {},
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
