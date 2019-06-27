<template>
  <section class="top">
    <Dashbar></Dashbar>
    <section class="flex-dashboard">
      <div class="left">
        <ul>
          <li v-for="item in docs">
            <p @click="selectDoc(item)">{{ item.title }}</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <!-- <addMaterial></addMaterial> -->
        <h3>{{selectedDoc.title}}</h3>
        <p>{{selectedDoc.body}}</p>
      </div>
    </section>
  </section>
</template>

<script>
import firebase from "firebase";
import Dashbar from "../components/Dashbar";
import addMaterial from "../components/addMaterial";
import { db } from "../main";

export default {
  name: "Dashboard",
  data() {
    return {
      docs: [],
      selectedDoc: []
    };
  },
  methods: {
    selectDoc: function(doc) {
      this.selectedDoc = doc;
    }
  },
  components: {
    Dashbar,
    addMaterial
  },
  firestore() {
    var user = firebase.auth().currentUser;
    return {
      docs: db
        .collection("users")
        .doc(user.uid)
        .collection("Docs")
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

  p {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.3rem;
  }
}
</style>
