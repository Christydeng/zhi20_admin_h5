import {
    createRouter, createWebHashHistory
} from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/imageRecognition/index'
    },
    // 中食指挥室
    {
        name: 'operations',
        path: '/operations/index',
        component: () => import('./views/operations/pages/index.vue'),
        meta: {
            title: '中食指挥室'
        }
    },
    // 图片识别
    {
        name: 'imageRecognitionIndex',
        path: '/imageRecognition/index',
        component: () => import('./views/imageRecognition/pages/index.vue'),
        meta: {
            title: '上传图片'
        }
    },
    {
        name: 'imageRecognitionInfo',
        path: '/imageRecognition/info',
        component: () => import('./views/imageRecognition/pages/info.vue'),
        meta: {
            title: '信息'
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export { router }