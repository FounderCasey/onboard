<template>
  <section id="Docs">
    <h2>{{company.company}}</h2>
    <article v-for="(item, index) in articles" :key="index">
      <h4>{{item.title}}</h4>
    </article>
  </section>
</template>

<script>
import { db } from "../main";

export default {
  name: "Docs",
  data() {
    return {
      articles: [],
      company: []
    };
  },
  props: ["name"],
  methods: {},
  firestore() {
    return {
      company: db.collection("companies").doc(this.name),
      articles: db
        .collection("companies")
        .doc(this.name)
        .collection("docs")
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
