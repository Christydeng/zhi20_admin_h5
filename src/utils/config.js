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
    },
    commitFace: {
        url: hosts[env].ACTIVITY_API + '/api/face/commitFace'
    }
}

export const apiUrls = apis
