<template>
  <div id="display-articles">
    <article class="flex-article" v-for="(article, index) in docs" :key="index">
      <h3 class="article-h3">
        {{ article.title }} -
        <span class="edit-span" @click="edit = !edit">Edit</span>
      </h3>
      <p class="article-p">{{ article.body }}</p>
      <div v-if="edit">
        <input type="text" v-model="article.title">
        <br>
        <textarea v-model="article.body" name id cols="30" rows="10"></textarea>
        <br>
        <button class="cta" @click="update(article)">Save</button>
      </div>
    </article>
  </div>
</template>


<script>
import firebase from "firebase";
import { db } from "../main";

export default {
  name: "DisplayArticles",
  data() {
    return {
      docs: [],
      body: "",
      title: "",
      edit: false
    };
  },
  methods: {
    update: function(item) {
      var user = firebase.auth().currentUser;
      db.collection("companies")
        .doc(user.uid)
        .collection("docs")
        .doc(item.id)
        .update({
          title: item.title,
          body: item.body
        });
    },

    delete: function(item) {
      var user = firebase.auth().currentUser;
      db.collection("companies")
        .doc(user.uid)
        .collection("docs")
        .doc(item.id)
        .delete();
    }
  },
  firestore() {
    var user = firebase.auth().currentUser;
    return {
      docs: db
        .collection("companies")
        .doc(user.uid)
        .collection("docs")
    };
  }
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

.flex-article {
  h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

.edit-span {
  font-size: 1rem;
  align-self: center;
  font-weight: 500;
  padding-left: 7px;
  color: $a;
}

.edit-span:hover {
  cursor: pointer;
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
