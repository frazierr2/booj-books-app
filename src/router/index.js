import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import DetailComponent from '@/components/DetailComponent'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/booj-books-app',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/details/:id',
            name: 'details',
            component: DetailComponent
        }
    ]
})