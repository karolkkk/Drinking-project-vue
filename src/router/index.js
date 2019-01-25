import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/Signin'
import SignUp from '@/components/SignUp'
//import carousel from '@/components/carousel'
import NotFound from '@/pages/PageNotFound'
import Modal from '@/components/Modal'
import drinks from '@/components/drinks'


Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },

    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },

    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },

    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: drinks
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    

   
  ],
  mode: 'history'
})
