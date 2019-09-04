export default [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: () => import('../views/Contacts.vue')
    }
]