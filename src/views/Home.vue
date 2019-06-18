<template>
  <section>
    <Navbar></Navbar>
    <section class="flexbox">
      <h1>Onboarding just got easier</h1>
      <img src="../assets/guyatcomputer.svg">
    </section>
  </section>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "home",
  components: {
    Navbar: Navbar
  }
};
</script>
