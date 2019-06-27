<template>
  <section class="nav-section">
    <nav class="navbar">
      <router-link to="welcome" class="logo">
        <img src="../assets/wayriselogo.svg">
      </router-link>
      <ul class="nav-links">
        <li class="nav-item">
          <router-link to="/home">
            <span>
              {{user.company}}
              <i class="fas fa-external-link-alt" id="export-i"></i>
            </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/account">Account</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" id="last-link">
            <span @click="logout">Logout</span>
          </router-link>
        </li>
        <li class="hamburger nav-item">
          <i @click="open = !open" v-if="!open" class="fas fa-bars"></i>
          <i @click="open = !open" v-if="open" class="fas fa-times"></i>
        </li>
      </ul>
    </nav>
    <div class="mobile-menu" v-if="open">
      <ul class="mobile-links">
        <li class="mobile-item">
          <router-link to="/">
            <span>
              {{user.company}}
              <i class="fas fa-external-link-alt" id="export-i"></i>
            </span>
          </router-link>
        </li>
        <li class="mobile-item">
          <router-link to="/account">Account</router-link>
        </li>
        <li class="mobile-item">
          <router-link to="/" @click="logout" id="last-link">Logout</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";

export default {
  name: "Dashbar",
  data() {
    return {
      open: false,
      user: []
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  },
  firestore() {
    var user = firebase.auth().currentUser;
    return {
      user: db.collection("users").doc(user.uid)
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

    #export-i {
      padding: 0 0 0 5px;
      font-size: 0.7rem;
    }

    #last-link {
      padding-right: 30px;
    }

    span {
      display: flex;
      align-items: center;
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
    #export-i {
      color: $a;
    }
  }
}

@media only screen and (max-width: 768px) {
  .nav-section {
    padding: 0;

    .logo {
      display: inline-block;
      padding-left: 00px;
    }
  }

  .nav-item {
    display: none;
  }

  .hamburger {
    display: inline-block;
  }

  .mobile-menu {
    display: flex;
    justify-content: center;
    padding: 0;
    .mobile-links {
      display: flex;
      flex-direction: column;
      list-style: none;
      text-decoration: none;
    }

    ul {
      padding: 0;
    }

    .mobile-item {
      a,
      i {
        display: inline-block;
        text-decoration: none;
        color: $p;
        width: 100%;
        padding: 15px 0;
      }

      span {
        display: flex;
        align-items: center;
      }

      #export-i {
        padding: 0 0 0 5px;
        font-size: 0.7rem;
      }
    }

    a:hover {
      color: $a;
    }

    .mobile-item:hover {
      #export-i {
        color: $a;
      }
    }
  }
}
</style>