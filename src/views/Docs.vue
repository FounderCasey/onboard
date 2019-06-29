<template>
  <section id="Docs">
    <h2>Docs Page</h2>
    <h3>{{company.company}}</h3>
    <button @click="getCompany">Get Companies</button>
    {{name}}
    <li v-for="(item, index) in company.docs" :key="index">{{item}}</li>
  </section>
</template>

<script>
import { db } from "../main";
import DisplayArticles from "../components/DisplayArticles";

export default {
  name: "Docs",
  data() {
    return {
      companies: [],
      company: []
    };
  },
  props: ["name"],
  methods: {
    getCompany: function() {
      this.companies.forEach(element => {
        console.log(name);
        if (element.company == this.name) {
          console.log("Matching element");
        }
      });
    }
  },
  created() {
    this.getCompany();
  },
  components: {
    DisplayArticles
  },
  firestore() {
    return {
      companies: db.collection("companies")
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
