export default [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: () => import('../views/Contacts.vue')
    }
]