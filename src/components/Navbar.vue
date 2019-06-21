<template>
  <section class="nav-section">
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
          <router-link to="/" href="#" id="last-link">Login</router-link>
        </li>
        <li class="hamburger nav-item">
          <i @click="open = !open" class="fas fa-bars"></i>
        </li>
      </ul>
    </nav>
    <div class="mobile-menu" v-if="open">
      <ul class="mobile-links">
        <li class="mobile-item">
          <router-link to="/">Get Started</router-link>
        </li>
        <li class="mobile-item">
          <router-link to="/">Product</router-link>
        </li>
        <li class="mobile-item">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li class="mobile-item">
          <router-link to="/login" id="last-link">Login</router-link>
        </li>
        <li class="hamburger mobile-item">
          <i class="fas fa-bars"></i>
        </li>
      </ul>
    </div>
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
.mobile-menu {
  display: none;
}

.hamburger {
  display: none;
}

nav {
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
    padding-left: 30px;
    img {
      width: 155px;
      vertical-align: middle;
    }
  }

  .nav-item {
    a,
    i {
      display: inline-block;
      padding: 15px 15px;
      text-decoration: none;
      color: $p;
    }

    #last-link {
      padding-right: 30px;
    }

    #first-link {
      padding-left: 30px;
      img {
        margin-left: 50px;
      }
    }
  }

  .nav-item:hover {
    a {
      color: $a;
    }
  }
}

@media only screen and (max-width: 768px) {
  .nav-item {
    display: none;
  }

  .hamburger {
    display: inline-block;
  }

  .mobile-menu {
    display: flex;
    .mobile-links {
      display: flex;
      flex-direction: column;
      list-style: none;
      text-decoration: none;
    }

    .mobile-item {
      a,
      i {
        display: inline-block;
        padding: 15px 15px;
        text-decoration: none;
        color: $p;
      }
    }
  }
}
</style>