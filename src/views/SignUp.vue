<template>
  <section id="signup" class="top">
    <Navbar></Navbar>
    <div class="flex-center">
      <h1>Sign Up</h1>
      <input placeholder="Email" v-model="email" type="email" required>
      <input placeholder="Company" v-model="company" type="text" required>
      <input placeholder="Company Link" v-model="link" type="text">
      <input
        placeholder="Password"
        v-model="password"
        v-on:keyup.enter="signUp"
        type="password"
        required
      >
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

var wayriseTitle = "Getting Started with Wayrise";
var wayriseBody = `This will be a quick introduction to get you started on the Wayrise platform. If you aren't already, click "Getting Started with Wayrise" on the left. 
  
Once here, this is where you can edit your text and title of each different article. 
  
The icons just below your text are there to save, cancel, and delete your articles. Once clicked, each icon will perform different actions. The save icon will save any changes made to this document while in edit mode, the cancel icon will disregard any changes and open the overview, and the trash icon will delete the current article in edit mode.`;

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      company: "",
      link: ""
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
                    title: wayriseTitle,
                    body: wayriseBody
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

input:first-of-type {
  margin-top: 30px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: none;
}

input:nth-of-type(2),
input:nth-of-type(3) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom: none;
}

input:last-of-type {
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

