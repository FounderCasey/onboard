<template>
  <section>
    <nav class="navbar">
      <router-link to="welcome" class="logo">
        <img src="../assets/updocslogo.svg">
      </router-link>
      <ul class="nav-links">
        <li class="nav-item">
          <router-link to="/">Get Started</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" href="#">Product</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" href="#">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" href="#">Login</router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: false
    };
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 375px) {
  nav {
    max-width: 1198px;
    margin: auto;
    font-size: 1.2rem;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-links {
      display: flex;
      list-style: none;
      text-decoration: none;
    }

    .logo {
      display: inline-block;

      img {
        width: 155px;
        vertical-align: middle;
      }
    }

    .nav-item {
      a {
        display: inline-block;
        padding: 10px 15px;
        text-decoration: none;
        color: $p;
      }
    }

    .nav-item:hover {
      a {
        color: $a;
      }
    }
  }
}
</style>