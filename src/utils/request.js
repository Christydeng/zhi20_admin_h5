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

function request(data) {
  let ajaxData = {
      method: "post",
      ...data,
  }
  console.log('ajaxData: ', ajaxData);
  service(ajaxData).then(function (res) {
    console.log('res--: ', res);
    return res;
  }).catch(function (err) {
    console.log('err--: ', err);
  })
}

export let $http = request