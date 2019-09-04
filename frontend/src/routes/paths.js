export default [
    {
        path: '*',
        redirect: '/login'
    },
    {
        name: 'home',
        path: '/home',
        meta: {
            requeresAuth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/Login.vue'),
        meta: {
            requeresAuth: false
        }
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: () => import('../views/Contacts.vue'),
        meta: {
            requeresAuth: true
        }
    }
]