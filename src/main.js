import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')