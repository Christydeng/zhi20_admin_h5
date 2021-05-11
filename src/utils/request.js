import axios from 'axios';

// 创建axios实例
const service = axios.create({
  // 请求超时时间
  timeout: 30000,
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('Authorization')) {
      // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['Authorization'] = sessionStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status == 200) {
      return Promise.resolve(response.data);
    } else {
      toast.error(res.msg)
      return Promise.reject(response.data);
    }
  },
  err => {
    if (err && err.response) {
    } else {
      console.log('连接到服务器失败')
    }
    return Promise.reject(err.response)
  }
)

/**
 * 
 * @param data {data, url, method}//参数,url,method
 * @returns 
 */

function request(pack) {
  let method = pack.method || 'post'
  let ajaxData = {
      method,
      url: pack.url
  }
  if (method === 'get') {
    ajaxData.params = pack.data;
  } else  {
    ajaxData.data = pack.data;
  }
  return new Promise((resolve, reject) => {
    service(ajaxData).then(function (res) {
      resolve(res)
    }).catch(function (err) {
      reject(err)
    })
  })
}

export let $http = request