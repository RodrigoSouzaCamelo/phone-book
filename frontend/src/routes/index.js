import Vue from 'vue';
import Router from 'vue-router';
import paths from './paths';
import EventBus from '../util/eventBus';

Vue.use(Router);

const router = new Router({
    routes: paths
});

router.beforeEach((to, from, next) => {
    const authenticatedCurrentUser = EventBus.isLogged;
    const requiresAuth = to.matched.some(record => record.meta.requeresAuth);

    if (requiresAuth && !authenticatedCurrentUser) next('login');
    else if(!requiresAuth && authenticatedCurrentUser && to.path == '/login') next('/home')
    else next();
})

export default router;