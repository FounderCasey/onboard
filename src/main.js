import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import {
  firestorePlugin
} from 'vuefire'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.config.productionTip = false;

Vue.use(firestorePlugin);
Vue.use(VueTextareaAutosize)

let app = "";

var firebaseConfig = {
  apiKey: "AIzaSyCewxl7leIrsTbY7gPMcRcKBIYSOezByPM",
  authDomain: "onboard-cw.firebaseapp.com",
  databaseURL: "https://onboard-cw.firebaseio.com",
  projectId: "onboard-cw",
  storageBucket: "",
  messagingSenderId: "828666859795",
  appId: "1:828666859795:web:c6fa8b687dd8b354"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const db = firestore

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});