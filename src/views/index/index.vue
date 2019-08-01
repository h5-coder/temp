<template>
    <div class="">
        主页
        <div class="chart" ref="chart"></div>
        <div class="s" style="position:relative;">${params.data}
            <span></span>
        </div>
    </div>
</template>

<script>
// import  from ''
// import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
// import apiService from '@/services/API-service'
import EchartService from "@/services/echart-service";

let echart = null;

export default {
    // 组件名
    name: "index",
    // 实例的数据对象
    data() {
        return {};
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {},
    // 生命周期函数 请求写在created中
    created() {},
    beforeMount() {},
    mounted() {
        echart = new EchartService(this.$refs.chart);
        echart.update();
    },
    // 组件
    components: {},
    // 监视
    watch: {},
    // 过滤器
    filters: {},
    // 自定义指令
    directive: {}
};
</script>

<style lang="less" scoped>
.chart {
    width: 450px;
    height: 400px;
}
.s{
    position: relative;
    span{
        position: absolute;
        left: 50%;
        bottom: -10px;
        margin:0 0 0 -5px;
        width:0px;
        height:0px;
        border-width: 10px ;
        border-style: solid;
        border-color: red transparent transparent ;
    }
}
.ebox{
     width: 150px;
    height: 100px;
}
</style>
