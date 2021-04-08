import {
    createRouter, createWebHashHistory
} from "vue-router"

const routes = [
    {
        name: 'operations',
        path: '/operations/index',
        component: () => import('./views/operations/index.vue'),
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