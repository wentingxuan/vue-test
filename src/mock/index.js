import mockjs from 'mockjs';

import TableApi from './table.js'
import ChartApi from './charts.js'
import DashbordApi from './dashbord.js'
import getFormApi from './form.js'
import getUserApi from  './user.js'

const Mock = require('mockjs') // Mock函数
// 使用拦截规则拦截命中的请求

Mock.mock('api/getChartData','get',ChartApi.getChartData);


Mock.mock('api/getTableData','get',TableApi.getTableData);

Mock.mock('api/getDashbordData','get',DashbordApi.getDashbordData);

Mock.mock('api/getFormData','get',getFormApi.getFormData);

Mock.mock('api/loginByEmail','post',getUserApi.loginByEmail);

Mock.mock(/api\/getUserInfo/,'get',getUserApi.getUserInfo);

export default mockjs
