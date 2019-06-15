<template>
  <section>
    <div>
      <h1>Login</h1>
      <input placeholder="Email" v-model="email" type="text">
      <br>
      <input placeholder="Password" v-model="password" type="password">
      <br>
      <button @click="login">Login</button>
      <p>
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>!
      </p>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          // eslint-disable-next-line
          user => {
            this.$router.replace("dashboard");
          },
          error => {
            alert("There was an error: " + error.message);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

