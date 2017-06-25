/**
 * Created by Administrator on 2017/6/5 0005.
 */

// 使用
var Mock = require('mockjs');

const list = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
});

module.exports = {
  list
};
