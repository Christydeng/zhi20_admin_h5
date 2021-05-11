import {
    createRouter, createWebHashHistory
} from "vue-router"

const routes = [
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
        name: 'imageRecognition',
        path: '/imageRecognition/index',
        component: () => import('./views/imageRecognition/pages/index.vue'),
        meta: {
            title: '中食指挥室'
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