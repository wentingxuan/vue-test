import Mock from 'mockjs'

const code = 200 // 状态码 项目同一

export default{
  getFormData () {
    let data = Mock.mock({
      'list|3': [{
        'value': /[a-z]{2}[A-Z]{2}[0-9]/,
        'label':'@cname',
        'children|4':[{
          'value': /[a-z]{2}[A-Z]{2}[0-9]/,
          'label':'@cname',
          'children|7':[{
            'value': /[a-z]{2}[A-Z]{2}[0-9]/,
            'label':'@cname'
          }]
        }]
      }]
    })
    return {
      code,
      data
    }
  }
}
