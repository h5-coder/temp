// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
let myChartToolpie
function stockPieManagement(odiv) {
    myChartToolpie = echarts.init(document.getElementById(odiv))
    let myChartTool = {
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                        },
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                    },
                },
                data: [
                    {
                        value: 335,
                        name: '直接访问',
                    },
                    {
                        value: 310,
                        name: '邮件营销',
                    },
                    {
                        value: 234,
                        name: '联盟广告',
                    },
                    {
                        value: 135,
                        name: '视频广告',
                    },
                    {
                        value: 1548,
                        name: '搜索引擎',
                    },
                ],
            },
        ],
    }
    myChartToolpie.setOption(myChartTool)
}
//数据  测试数据 请在左正角六个点上测试数据  其它点没有数据
function pieChartsFn(yindex, xindex) {
    console.log(xindex, yindex)
    let piedata = [
        [
            [
                {
                    value: 100,
                    name: '直接访问',
                },
                {
                    value: 100,
                    name: '邮件营销',
                },
                {
                    value: 900,
                    name: '联盟广告',
                },
            ],
            [
                {
                    value: 235,
                    name: '直接访问',
                },
                {
                    value: 210,
                    name: '邮件营销',
                },
                {
                    value: 234,
                    name: '联盟广告',
                },
            ],
        ],
    ]
    myChartToolpie.setOption({
        series: [
            {
                data: piedata[xindex][yindex],
            },
        ],
    })
}

class EchartService {
    el = null
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '1',
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
            },
        ],
        tooltip: {
            position: 'top',
            padding: 0,
            triggerOn: 'none',
            alwaysShowContent:true,
            formatter(params, ticket, callback) {
                console.log(params)
                //这两步就是获取 x 和y 坐标
                var yindex = params.dataIndex
                var xindex = params.seriesIndex
                //当调用这个方法后，不会立即获取到ebox这个ID，所以用定时器，或许有别的方法，欢迎补充
                setTimeout(function(){
                        //给饼图传入ID
                        stockPieManagement("ebox");
                        //把获取到的x,y坐标传给设置数据的方法里面
                        pieChartsFn(yindex,xindex);
                },200)
                return `<div id="ebox" class="ebox" style="position:relative; width: 150px;height: 100px;">
                            这是canvas=${params.data}
                        <span style="position: absolute;
                                    left: 50%;
                                    bottom: -20px;
                                    margin:0 0 0 -5px;
                                    width:0px;
                                    height:0px;
                                    border-width: 10px ;
                                    border-style: solid;
                                    border-color: red transparent transparent ;"></span>
                        </div>`
            },
        },
    }
    chart = null

    constructor(el) {
        this.el = el
        this.init()
    }
    init() {
        this.chart = echarts.init(this.el)
        this.chart.setOption(this.option)
        this.chart.on('mouseover', 'series', e => {
            console.log('mouseover', e);
            this.chart.dispatchAction({
                type: 'showTip',
                seriesIndex: e.seriesIndex,
                dataIndex: e.dataIndex,
                // 本次显示 tooltip 的位置。只在本次 action 中生效。
                // 缺省则使用 option 中定义的 tooltip 位置。
                position: 'top',
            })
        })
        this.chart.on('mouseout', 'series', e => {
            console.log('mouseout', this.chart.dispatchAction)
            this.chart.dispatchAction({
                type: 'hideTip',
                seriesIndex: e.seriesIndex,
                dataIndex: e.dataIndex,
            })
        })
    }
    update() {}
}

// 导出一个对象
export default EchartService;
