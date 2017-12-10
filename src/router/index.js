import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/Start';
import Quiz from '@/components/Quiz';
import Finish from '@/components/Finish';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Start,
        },
        {
            path: '/quiz',
            name: 'Quiz',
            component: Quiz,
        },
        {
            path: '/finish',
            name: 'Finish',
            component: Finish,
        },
    ],
});
