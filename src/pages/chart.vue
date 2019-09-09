<!--错误记录-->
<!--1、Component series.pie not exists. Load it first.
 原因：没有引入pie,其他bar,tree一样-->
<template>
  <div style="height:280px;" ref="myEchart">
    <v-chart theme="ovilia-green" :options="pie" style="float: left;width:500px;"/>
    <v-chart theme="ovilia-green" :options="bar" style="float: left;width:500px;"/>
  </div>
</template>
<script>
  import ECharts from 'vue-echarts/components/ECharts';
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/polar'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/title.js'

  import getTableData from '@/mock/index';//引入接口
//  import theme from '../theme.json'
//  ECharts.registerTheme('ovilia-green', theme); //引入主题
  export default {
    name:'chart',
    components: {
      'v-chart': ECharts
    },
    data () {
      return {
        pie: {
          title : {
            text: "会员数据统计",
            subtext: "动态数据",
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            show: true,
            orient: 'vertical',
            left: 'left',
            data:[]
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        bar: {
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [],
            type: 'bar'
          }]
        }
      }
    },
    mounted(){
      this.createPie();
    },
    created(){
    //组件实例创建完成，此时dom还未生成
    },
    methods:{
      createPie() {
        let $this = this;
//        getTableData(data)
        this.$axios.get('api/getChartData')
          .then(response => {
            let $data = response.data.data;
            $this.pie.legend.data = $data[0].pieData.legendData;
            $this.pie.series[0].data = $data[0].pieData.seriesData;
            $this.bar.series[0].data = $data[0].barData.seriesData;
            $this.bar.xAxis.data = $data[0].barData.xAxisData;
          })
      }
    }
  }
</script>
