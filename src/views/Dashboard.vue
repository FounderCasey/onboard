<template>
  <section class="top">
    <Dashbar></Dashbar>
    <section class="flex-dashboard">
      <div class="left">
        <ul>
          <li v-for="item in docs">
            <p @click="selectDoc(item)">{{ item.title }}</p>
          </li>
          <li>
            <p @click="showAddArticle = !showAddArticle">Add New Article</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <addArticle v-if="showAddArticle"></addArticle>
        <DisplayArticles v-if="!showAddArticle"></DisplayArticles>
        <!--
        <h3>{{selectedDoc.title}}</h3>
        <p>{{selectedDoc.body}}</p>
        -->
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

export default {
  name: "Dashboard",
  data() {
    return {
      docs: [],
      selectedDoc: [],
      showAddArticle: false
    };
  },
  methods: {
    selectDoc: function(doc) {
      this.selectedDoc = doc;
    }
  },
  components: {
    Dashbar,
    addArticle,
    DisplayArticles
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
.flex-dashboard {
  display: flex;
  flex-direction: row;
}
.left {
  width: 25%;
  text-align: left;
  border-right: solid 1px $a;
  p {
    font-size: 1rem;
  }
}

.right {
  width: 75%;
  padding: 0 40px;
  text-align: left;
}
</style>
