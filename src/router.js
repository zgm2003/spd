// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/home',
        name:'HomeView',
        component: HomeView,
        redirect:'/weapon',
        children:[
            {
                path:'/weapon',
                name:'WeaponView',
                component: ()=>import('./views/WeaponView.vue'),
                redirect:'/weapon/WornShortsword',
                children:[
                    {
                        path:'/weapon/WornShortsword',
                        name:'WornShortswordView',
                        component:()=>import('./views/weapon/WornShortsword.vue')
                    },
                    {
                        path:'/weapon/StuddedGloves',
                        name:'StuddedGloves',
                        component:()=>import('./views/weapon/StuddedGloves.vue')
                    },
                    {
                        path:'/weapon/Dagger',
                        name:'DaggerView',
                        component:()=>import('./views/weapon/DaggerView.vue')
                    },
                    {
                        path:'/weapon/MageStaff',
                        name:'MageStaff',
                        component:()=>import('./views/weapon/MageStaff.vue')
                    }
                ]
            },
            {
                path:'/darts',
                name:'DartsView',
                component: ()=>import('./views/DartsView.vue'),
                redirect:'/darts/XiaoFeibiao',
                children:[
                    {
                        path:'/darts/XiaoFeibiao',
                        name:'XiaoFeibiao',
                        component:()=>import('./views/darts/XiaoFeibiao.vue')
                    },

                ]
            },
            {
                path:'/armor',
                name:'ArmorView',
                component: ()=>import('./views/ArmorView.vue'),
            },
            {
                path:'/staff',
                name:'StaffView',
                component: ()=>import('./views/StaffView.vue'),
            },
        ]

    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
