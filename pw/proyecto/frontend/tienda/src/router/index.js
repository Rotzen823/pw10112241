import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from '../views/ClientesView.vue'
import ClientesCreateView from '../views/ClientesCreateView.vue'
import ClientesEditarView from '../views/ClientesEditarView.vue'
import RegistroView from '../views/RegistroView.vue'
import EntradaView from '../views/EntradaView.vue'
import NoAutorizaView from '../views/NoAutorizaView.vue'

import { getAuth } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/clientes/create',
      name: 'clientesCreate',
      component: ClientesCreateView
    },
    {
      path: '/clientes/:id/edit',
      name: 'clientesEditar',
      component: ClientesEditarView
    },
    {
      path: '/clientes/registro',
      name: 'registro',
      component: RegistroView
    },
    {
      path: '/clientes/entrada',
      name: 'entrada',
      component: EntradaView
    },
    {
        path: '/clientes/noautoriza',
        name: 'noautoriza',
        component: NoAutorizaView
      }
  ]
})

//Analizamos todas las rutas antes de que se ejecuten
router.beforeEach((to, from, next) =>{
    //Si alguna ruta tiene meta.requireAuth
    if(to.matched.some((record) => record.meta.requireAuth)){
        //Si existe un usuario registrado
        if(getAuth().currentUser){
            next(); //Continuar sin problemas
        }
        else{
            //alert("Acceso no autorizado");
            next("/clientes/noautoriza")
        }
    }
    else{ //Si no tiene la etiqueta meta
        next();
    }
})

export default router
