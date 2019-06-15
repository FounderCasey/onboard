<template>
  <section>
    <div>
      <h1>Sign Up</h1>
      <input placeholder="Email" v-model="email" type="text">
      <br>
      <input placeholder="Password" v-model="password" type="password">
      <br>
      <button @click="signUp">Sign Up</button>
      <br>
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      console.log("In function");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          // eslint-disable-next-line
          user => {
            this.$router.replace("dashboard");
            console.log("Worked");
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

