import { Random } from 'mockjs'

const code = 200 // 状态码 项目同一

export default{
  getChartData () {
    let data = [{
      "pieData":{
        "legendData":["微信访问","公众号访问","扫码进入","分享进入","搜索访问"],
        "seriesData":[
          {"value":335, "name":"微信访问"},
          {"value":310, "name":"公众号访问"},
          {"value":234, "name":"扫码进入"},
          {"value":135, "name":"分享进入"},
          {"value":1548, "name":"搜索访问"}
        ]
      },
      "barData":{
        "xAxisData":["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "seriesData":[120, 200, 150, 80, 70, 110, 130]
      }
    }]
    return {
      code,
      data
    }
  }
}
