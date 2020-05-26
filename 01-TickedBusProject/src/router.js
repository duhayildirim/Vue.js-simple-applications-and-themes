import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SeferAra from "./views/SeferAra.vue";
import KoltukSecimi from './views/KoltukSecimi.vue'
import YolcuBilgileri from './views/YolcuBilgileri.vue'
import OdemeBilgileri from "./views/OdemeBilgileri.vue"

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'home',
            redirect : 'seferara'
        },
        {
            path: '/seferara',
            name: 'seferara',
            component: SeferAra
        },
        {
            path: '/koltuksecimi/:sefer_id?' ,
            name: 'koltuksecimi' ,
            component : KoltukSecimi
        },
        {
            path: '/yolcubilgileri' ,
            name: 'yolcubilgileri' ,
            component : YolcuBilgileri
        },
        {
            path : '/odemebilgileri' ,
            name: 'odemebilgileri' ,
            component : OdemeBilgileri
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        }
    ]
})