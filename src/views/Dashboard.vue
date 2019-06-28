<template>
  <section id="fixed-height" class="top">
    <Dashbar></Dashbar>
    <section class="flex-dashboard">
      <div class="left">
        <ul>
          <li class="articles pointer" v-for="(item, index) in docs" :key="index">
            <p @click="selectDoc(item); selector = 3">{{ item.title }}</p>
          </li>
          <li>
            <p class="pointer" v-if="selector != 2" @click="selector = 2">Add New Article</p>
            <p class="red pointer" v-if="selector == 2" @click="selector = 1">Cancel</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <DisplayArticles v-if="selector == 1"></DisplayArticles>
        <addArticle v-if="selector == 2"></addArticle>
        <div v-if="selector == 3">
          <h3 class="article-h3">{{selectedDoc.title}}</h3>
          <!-- <p class="article-p">{{selectedDoc.body}}</p> -->
          <textarea-autosize
            class="article-textarea"
            placeholder="Type something here..."
            ref="someName"
            v-model="selectedDoc.body"
          ></textarea-autosize>
          <button class="cta" @click="update(selectedDoc)">Save</button>
          <button class="cta cancel-btn" @click="selector = 1">Cancel</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import firebase from "firebase";
import Dashbar from "../components/Dashbar";
import addArticle from "../components/addArticle";
import DisplayArticles from "../components/DisplayArticles";
import { db } from "../main";
import VueTextareaAutosize from "vue-textarea-autosize";

export default {
  name: "Dashboard",
  data() {
    return {
      docs: [],
      selectedDoc: [],
      selector: 1,
      source: "# Hello"
    };
  },
  methods: {
    selectDoc: function(doc) {
      this.selectedDoc = doc;
    },

    update: function(item) {
      var user = firebase.auth().currentUser;
      db.collection("companies")
        .doc(user.uid)
        .collection("docs")
        .doc(item.id)
        .update({
          title: item.title,
          body: item.body
        })
        .then(() => {
          this.selector = 1;
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
  components: {
    Dashbar,
    addArticle,
    DisplayArticles,
    VueTextareaAutosize
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
#fixed-height {
  height: 85vh;
  padding: 0;
}

.flex-dashboard {
  display: flex;
  flex-direction: row;
  padding: 0;
  border-top: solid 2px $a;
}
.left {
  width: 25%;
  text-align: left;
  border-right: solid 2px $a;
  p {
    font-size: 1rem;
  }
}

.right {
  width: 75%;
  padding: 0 40px;
  text-align: left;

  h3 {
    margin-top: 10px;
  }
}

.articles:hover {
  color: $a;

  p {
    color: $a;
    font-weight: 500;
  }
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.red {
  color: red;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
</style>
