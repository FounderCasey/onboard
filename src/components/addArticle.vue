<template>
  <div id="add-article">
    <h2>Add new article</h2>
    <form v-on:submit.prevent="saveArticle">
      <label>Title</label>
      <input type="text" v-model="blog.title" required>
      <label>Content</label>
      <textarea name id cols="30" rows="10" v-model="blog.body"></textarea>
      <br>
      <input type="submit" class="cta">
    </form>
  </div>
</template>


<script>
import firebase from "firebase";
import { db } from "../main";

export default {
  name: "addArticle",
  data() {
    return {
      blog: {
        title: "",
        body: ""
      },
      user: []
    };
  },
  methods: {
    saveArticle: function() {
      var user = firebase.auth().currentUser;
      db.collection("companies")
        .doc(user.uid)
        .collection("docs")
        .add({
          title: this.blog.title,
          body: this.blog.body
        });
    }
  },
  firestore() {
    var user = firebase.auth().currentUser;
    return {
      user: db.collection("users").doc(user.uid)
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#add-material * {
  box-sizing: border-box;
}

#add-material {
  max-width: 500px;
  margin: 20px auto;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

h3 {
  margin-top: 10px;
}
</style>
