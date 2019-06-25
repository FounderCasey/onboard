<template>
  <section class="top">
    <Navbar></Navbar>
    <span>Oops...</span>
    <p>We aren't finished with this page yet.</p>
    <img src="../assets/404.svg">
  </section>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Product",
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
span {
  font-weight: 700;
  font-size: 4rem;
  padding-right: 5px;
}

img {
  width: 75%;
  margin-right: 50px;
}
</style>

