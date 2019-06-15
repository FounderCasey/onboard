<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Dashboard",
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
