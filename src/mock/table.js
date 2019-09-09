import Mock from 'mockjs'

const code = 200 // 状态码 项目同一

export default{
  getTableData () {
    let data = Mock.mock({
      'list|10': [{
        'userID|+1': /[d][0-9]{7}[a-z]{5}[0-9]{5}/,
        'Uid':Mock.Random.id(),
        'userName':'@cname',
        'date':'@date',
        'address':"@region",
        'state':/[d][0-1]{1}/
      }]
    })
    return {
      code,
      data
    }
  }
}
