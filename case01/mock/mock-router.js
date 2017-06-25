/**
 * Created by Administrator on 2017/6/5 0005.
 */

var express = require('express');
var router = express.Router();
var mockData = require('./dev-mock');

router.get('/user/get/list', function (req, res, next) {
  //响应mock数据
  res.json(mockData.list);
});


module.exports = router;
