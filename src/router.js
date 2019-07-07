import Vue from "vue";
import firebase from "firebase";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Dashboard from "./views/Dashboard.vue";
import Docs from "./views/Docs.vue";
import Account from "./views/Account.vue";
import NotFound from "./views/NotFound.vue";
import axios from 'axios';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter(to, from, next) {
        const currentUser = firebase.auth().currentUser;

        if (currentUser) next("dashboard");
        else next();
      }
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/notfound",
      name: "NotFound",
      component: NotFound,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/:name",
      name: "Docs",
      props: true,
      component: Docs,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {

        var paramName = to.params.name;
        axios
          .get('https://firestore.googleapis.com/v1/projects/onboard-cw/databases/(default)/documents/companies/' + paramName)
          .then(response => next())
          .catch(function (error) {
            // handle error
            next("notfound")
          })
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  //else if (!requiresAuth && currentUser) next("dashboard");
  else next();
});

export default router;