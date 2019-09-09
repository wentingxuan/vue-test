<template>
  <div>
    <el-row>
      <el-col>
        <h3>Vue学习之后台管理框架</h3>
        <h5> <a href="https://github.com/wentingxuan/vue-test" target="_blank">github地址</a>  </h5>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="14" :sm="12" :md="12" :lg="11" :xl="11"><div class="grid-content">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-show gird-red">
            <div class="title">
               243
            </div>
            <div class="value">
              my order
            </div>
          </div>
          <div class="grid-show gird-blue">
            <div class="title">
              5432
            </div>
            <div class="value">
              Visited
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-show gird-orage">
            <div class="title">
              782
            </div>
            <div class="value">
              Saled
            </div>
          </div>
          <div class="grid-show gird-green">
            <div class="title">
              15343
            </div>
            <div class="value">
              Purchased
            </div>
          </div>
        </el-col>
      </div></el-col>
      <el-col :xs="10" :sm="12" :md="12" :lg="13" :xl="13">
        <div class="grid-content bg-purple-light">
          <v-chart :options="option" class="gird-chart"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <div>
          <Calendar>
            <!--v-on:choseDay="clickDay"-->
            <!--v-on:changeMonth="changeDate">-->
            <!--v-on:isToday="clickToday">-->
            <!--// :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记-->
            <!--//:markDateMore=arr // 多种不同的标记-->
            <!--// 第一个标记和第二个标记不能同时使用-->
            <!--// :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位-->
            <!--// :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位-->
            <!--// :sundayStart="true" //默认是周一开始 当是true的时候 是周日开始-->
            </Calendar>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div>
          <todo-list></todo-list>
        </div>
      </el-col>
      <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
        <div>
          <el-carousel :interval="4000" type="card" height="200px">

            <el-carousel-item v-for="item in images" :key="item">
              <img :src="item" class="medium" style="width:100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import ECharts from 'vue-echarts/components/ECharts';
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/polar'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/title.js'

  import img1 from '../../static/images/1.jpg'

  import Calendar from 'vue-calendar-component'; //日历组件
  import getTableData from '@/mock/index';//引入接口
  import TodoList from '@/components/TodoList'

  export default {
    name:'dashboard',
    components: {
      'v-chart': ECharts,
      Calendar,
      TodoList
    },
    data(){
      return{
        "option" :{},
        "images":['../../static/images/1.jpg','../../static/images/2.jpg',
          '../../static/images/3.jpg','../../static/images/4.jpg',
          '../../static/images/5.jpg','../../static/images/6.jpg' ]
      }
    },
    mounted(){
      this.createChart();
    },
    methods:{
      createChart() {
        let $this = this;
        this.$axios.get('api/getDashbordData')
          .then(response => {
            let $data = response.data.data;
            $this.option = $data
          })
      }
    }
  }

</script>

<style type="text/css" scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
    margin-top:10px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 200px;
    text-align: center;
  }
  .grid-show{
    height: 91px;
    line-height: 26px;
    margin: 16px;
    padding-top: 45px;
    padding-left: 20px;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-right: 0;
  }
  .gird-red{
    background: #ffcc99;
  }
  .gird-blue{
    background: #66cccc;
  }
  .gird-orage{
    background: #3399cc;
  }
  .gird-green{
    background: #fc8675;
  }
  .grid-bottom{
    background: lemonchiffon;
    height:400px;
    margin-left:20px;
  }
  .wh_container[data-v-2ebcbc83]
  {
    margin-left:20px ;
  }
  .wh_content_item[data-v-2ebcbc83]{
    height:70px !important;
  }
  .wh_content_item .wh_isToday[data-v-2ebcbc83] {
    background: cornflowerblue;
    border-radius: 100px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel--horizontal{
    margin-top:40px;
    margin-bottom:60px;
  }
  .gird-chart{
    height:300px;
    width:100%;
  }
  .state-overview{color:#fff}.state-overview .ivu-col{margin-bottom:20px}.state-overview .state-value .value{font-size:24px;font-weight:700;margin-bottom:5px}.state-overview .state-value .title{font-size:14px}.state-value{width:60%;display:inline-block}.symbol{width:35%;display:inline-block}.state-overview .panel{border-radius:4px;padding:25px 20px}.panel.purple{background:#6a8abe;box-shadow:0 5px 0 #5f7cab}.panel.red{background-color:#fc8675;box-shadow:0 5px 0 #e27869}.panel.blue{background:#5ab6df;box-shadow:0 5px 0 #51a3c8}.panel.green{background:#4acacb;box-shadow:0 5px 0 #42b5b6}.dash_income_chart{float:left}.ivu-row{margin-bottom:20px!important}.dash_income{border-radius:4px;background-color:#fff;height:80px;padding:15px}.staff_name{font-weight:900;font-size:16px}.staff_progress{margin-left:10px;width:90%}.staff_progress p{margin:0}.staff_list{border-radius:4px;margin-top:0;height:90px;display:flex;align-items:center}.animated{background-color:#eff0f4}li{margin-bottom:11px;margin-left:10px;margin-right:10px}.num{font-weight:700}.time{font-size:14px;font-weight:700}.content{padding-left:5px}.dashboard_feature{text-align:center}.demo-carousel{height:600px;line-height:200px;text-align:center;color:#fff;font-size:20px;background:#506b9e}.demo-carousel img{height:100%;width:100%}h3,h4,h5{margin:12px}h3{margin-bottom:20px}p{margin:12px}.row-margin-top{margin-top:30px}.state-info{position:absolute;right:15px;top:20px;margin-bottom:30px}.state-info .panel{margin-bottom:20px;float:right;margin-left:15px}.panel{background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.state-info .panel .summary{float:left;margin-right:20px}.state-info .panel .summary span{color:#49586e;font-size:13px;font-weight:400;text-transform:uppercase;margin-bottom:10px}.state-info .panel .summary h3.red-txt{color:#fc8675}.state-info .panel .summary h3.green-txt{color:#65cea7}.state-info .panel .summary h3{font-size:200%;font-weight:700;line-height:20px;margin:0}.page-heading h3{color:#49586e;font-size:25px;font-size:11%;font-weight:400;margin:10px 0}.chart-bar{float:right;margin-top:5px}.chart-bar img{display:inline-block;width:68px;height:45px;vertical-align:top}@media screen and (max-width:767px){.state-info{position:static;width:100%;margin-top:15px}.state-info .panel{width:100%}}.panel.blue-box{background:none repeat scroll 0 0 #5ab5de;box-shadow:0 5px 0 #51a3c7;color:#fff}.twt-info h3{font-family:'Open Sans',sans-serif;font-size:16px;font-weight:900;margin:10px 0 30px 0;text-align:center}.twt-info p{font-size:18px;line-height:25px;font-style:italic;margin:0 0 20px 0;text-align:center}.twt-info p a{color:#98fdf4}.media:first-child{margin-top:0}.media.usr-info>.pull-left{margin-right:20px;margin-top:10px}.media>.pull-left{margin-right:10px}.pull-left{float:left}.pull-left{float:left!important}.custom-trq-footer{background:none repeat scroll 0 0 #4eb6b7!important;box-shadow:0 5px 0 #46a3a4;color:#fff;border-top:none}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.usr-info .thumb{width:80px;height:80px;border-radius:50%;-webkit-border-radius:50%}.usr-info img{vertical-align:middle}.usr-info h4{color:#658585;margin-bottom:0}.media-heading{margin:0 0 5px}.usr-info .media-body span{color:#ea755c;font-size:12px;margin-bottom:20px;display:inline-block}.usr-info .media-body p{color:#b6bcbc}ul.user-states{list-style-type:none;padding:20px 0}ul.user-states li{text-align:center;float:left;width:33%;font-size:18px;margin:0}
</style>
