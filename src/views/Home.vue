<template>
  <section id="home" class="top">
    <Navbar></Navbar>
    <section class="flexbox">
      <div class="flex-item">
        <h1>Onboarding just got easier.</h1>
        <p>
          Often times onboarding new hires and customers can be rather
          unorganized and leaving them feeling overwhelmed,
          especially with documents all over.
        </p>
        <button class="cta">Get Started</button>
      </div>
      <img src="../assets/guyatcomputer.svg" class="flex-item">
    </section>
    <section class="flexbox">
      <img src="../assets/truck.svg" class="flex-item">
      <div class="flex-item short">
        <h1>Load your material in one place.</h1>
        <p>
          Ensure that your documentation and training materials
          are always readily available and displayed
          in an engaging way.
        </p>
      </div>
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

<style lang="scss" scoped>
</style>

