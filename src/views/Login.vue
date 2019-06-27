<template>
  <section id="login" class="top">
    <Navbar></Navbar>
    <div class="flex-center">
      <h1>Login</h1>
      <input placeholder="Email" v-model="email" type="text">
      <input placeholder="Password" v-model="password" v-on:keyup.enter="login" type="password">
      <br>
      <button class="cta" @click="login">Login</button>
      <p>
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
import Navbar from "../components/Navbar";

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
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 80vh;
}

input {
  border: 1px solid $a;
  outline: none;
  border-radius: 5px;
  font-size: 1.65rem;
  color: $p;
  width: 370px;
  text-indent: 10px;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.089);
}

input:nth-of-type(1) {
  margin-top: 30px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: none;
}

input:nth-of-type(2) {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

button {
  width: 175px;
  margin-top: 15px;
}

a {
  color: $a;
  font-weight: 500;
  text-decoration: none;
}

.flex-center {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

