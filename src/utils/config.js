const env = "TEST_DEVELOPMENT"
// const env = "ZS_DEVELOPMENT"
// const env = "PRODUCTION"

const hosts = {
    TEST_DEVELOPMENT: {
        BASE_API: 'http://testv3.sahhealthgroup.com',
        ACTIVITY_API: 'http://activityphptest.shouba.cn'
    },
    ZS_DEVELOPMENT: 'https://zstestv3.sahhealthgroup.com',
    PRODUCTION: 'https://jk.sahhealthgroup.com'
}

// api接口配置
const apis = {
    ossPolicy: {
        url: hosts[env].ACTIVITY_API + '/api/face/ossPolicy'
    }
}

export const apiUrls = apis

// 深度轮训拼接url地址
function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url;
        } else {
            obj[v] = disposeUrl(obj[v], prefix);
        }
    });
    return obj
}
