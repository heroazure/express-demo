/**
 * Created by Administrator on 2017/12/8 0008.
 * https://github.com/aliyun/api-gateway-nodejs-sdk
 */
const express = require('express')
const router = express.Router()
const Client = require('aliyun-api-gateway').Client
const client = new Client('24718554','d3f7982b4525bc5bdb4554216be14368')

router.get('/oil', function (req, res, next) {
    const url = 'http://ali-todayoil.showapi.com/todayoil'
    client.get(url, {
        data: {
            'prov': '浙江'
        },
        headers: {
            accept: 'application/json'
        }
    }).then(result=>{
        console.log(JSON.stringify(result))
        res.json(result)
    }).catch(()=>{
        console.log('catch')
    })
})
module.exports = router

