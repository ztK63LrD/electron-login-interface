// 对外暴露路由(常量路由)
export const constantRoute = [
    {
        path: '/',
        name: 'login', // 命名路由
        component: () => import('@renderer/views/login/index.vue'),
        meta: {
            title: '登录页面',
        },
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@renderer/views/home/index.vue'),
        meta: {
            title: '后台页面',
        },
    }
]