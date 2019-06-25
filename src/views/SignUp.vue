<template>
  <section id="signup" class="top">
    <Navbar></Navbar>
    <div class="flex-center">
      <h1>Sign Up</h1>
      <input placeholder="Email" v-model="email" type="text">
      <input placeholder="Password" v-model="password" type="password">
      <br>
      <button class="cta" @click="signUp">Sign Up</button>
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
import Navbar from "../components/Navbar";

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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
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
#signup {
  height: 80vh;
}
input {
  width: 375px;
}

input:nth-of-type(1) {
  margin-top: 40px;
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
  margin-top: 30px;
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

