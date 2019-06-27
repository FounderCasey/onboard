<template>
  <section id="signup" class="top">
    <Navbar></Navbar>
    <div class="flex-center">
      <h1>Sign Up</h1>
      <input placeholder="Email" v-model="email" type="email">
      <input placeholder="Company" v-model="company" type="text">
      <input placeholder="Password" v-model="password" v-on:keyup.enter="signUp" type="password">
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
import { db } from "../main";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      company: ""
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
            let currentUser = firebase.auth().currentUser;
            db.collection("companies")
              .doc(currentUser.uid)
              .set({
                email: this.email,
                company: this.company
              })
              .then(() => {
                db.collection("companies")
                  .doc(currentUser.uid)
                  .collection("docs")
                  .add({
                    title: "Getting Started with Wayrise",
                    body: "Test"
                  });
              });
            this.$router.replace("dashboard");
          },
          error => {
            alert("Oops, we found an error: " + error.message);
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
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom: none;
}

input:nth-of-type(3) {
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

