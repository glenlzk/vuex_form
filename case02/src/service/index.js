/**
 * Created by Administrator on 2017/5/31 0031.
 */

import axios from 'axios';

let baseUrl;

if (process.env.NODE_ENV == 'production') {
  baseUrl = '/yzlpms/';
} else {
  baseUrl = '/yzlpms/';
};

/*const myFetch = (url='', param={}, method="GET") => {

  var instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-WX-SESSIONID':'869743613414735872'
    }
  });

  instance({
    method: method,
    url: url,
    data: param.data || {}
  })
    .then(function (response) {
      param.success(response);
  })
    .catch(function (error) {
      param.fail(error);
    });;

};*/
const myFetch = (url='', data={}, method="GET") => {
  let instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-WX-SESSIONID':'869743613414735872'
    }
  });

  let promise = new Promise((resolve, reject) => {
    instance({
      method: method,
      url: url,
      data: data || {}
    })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });;
  });

  return promise;
};

const fetchMock = (url='', data={}, method="GET") => {
  let instance = axios.create({
    baseURL: '/mock',
    timeout: 5000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-WX-SESSIONID':'869743613414735872'
    }
  });

  let promise = new Promise((resolve, reject) => {
    instance({
      method: method,
      url: url,
      data: data || {}
    })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });;
  });

  return promise;
};




const getKeyCodeList = () => {
  return myFetch('webapp/api/j/getKeyCodeList');
}

const getUserList = () => {
  return fetchMock('/user/get/list');
}

export {
  getKeyCodeList,
  getUserList
}
