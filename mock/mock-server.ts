import express from 'express'
import Mock from 'mockjs'
import bodyParser from 'body-parser'

let app = express()
app.use(bodyParser.json())

let pageRouter = require('./page-router')

// 设置跨域
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  // 此处根据前端请求携带的请求头进行配置
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Access-Token,X-Access-Token'
  )
  next()
})

// ******************* 获取路由表 *************************
app.get('/router', (req, res) => {
  res.json(Mock.mock(pageRouter.getPageRouter(req)))
})

app.listen('3000', () => {
  console.log('mock服务器启动ing中... port: 3000')
})
