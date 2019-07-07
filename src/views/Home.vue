<template>
  <section id="home" class="top">
    <Navbar></Navbar>
    <section class="flexbox">
      <div class="flex-item">
        <h1 class="left">Onboarding just got easier.</h1>
        <p class="left">
          Often times onboarding new hires and customers can be rather
          unorganized and leaving them feeling overwhelmed,
          especially with documents all over.
        </p>
        <form action>
          <input type="email" placeholder="Email" />
          <br />
          <button class="cta" id="submit">Stay Tuned</button>
        </form>
      </div>
      <img src="../assets/guyatcomputer.svg" class="flex-item" />
    </section>
    <section class="flexbox">
      <div class="flex-item short center">
        <img class="icon" src="../assets/TeamIcon.svg" />
        <h2>Team Members</h2>
        <p class="center">
          Onboarding new hires can be tough, especially with an
          abundance of documents. Wayrise creates a home for your
          onboarding materials.
        </p>
      </div>
      <div class="flex-item short center">
        <img class="icon" src="../assets/customericon.svg" />
        <h2>Customers</h2>
        <p class="center">
          Ensuring that your product has ample knowledge available
          is paramount. Wayrise ensures that your customers will
          always have that information provided.
        </p>
      </div>
    </section>
    <section class="flexbox">
      <img src="../assets/truck.svg" class="flex-item" />
      <div class="flex-item short">
        <h2 id="left">Load your material in one place.</h2>
        <p>
          Wayrise ensures that your learning materials are
          always kept in a singular location, where your
          team or users can utilize.
        </p>
      </div>
    </section>
    <img class="product" src="../assets/optimizeproduct.png" />
    <section class="flexbox">
      <div class="flex-item short">
        <h2 class="left">Optimize your teams start up time.</h2>
        <p>
          Onboarding can be a daunting task for both parties.
          Wayrise empowers you to get your team or users up to
          speed faster.
        </p>
      </div>
      <img src="../assets/Waiting.svg" class="flex-item" />
    </section>
    <img class="product" src="../assets/optimizeproduct.png" />
    <section class="flexbox">
      <img src="../assets/waitlist.svg" class="flex-item" />
      <div class="flex-item short">
        <h2 class="center">Stay tuned, join our waitlist.</h2>
        <p class="center">
          We are coming out soon, and our waitlisters will
          be able to get the first look at Wayrise!
        </p>
        <form id="center-form" action>
          <input type="email" placeholder="Email" />
          <br />
          <button class="cta" id="submit">Stay Tuned</button>
        </form>
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
.icon {
  padding: 25px 0;
}

form {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

input {
  border: 1px solid $a;
  background: #e8f0fe;
  outline: none;
  border-radius: 5px;
  font-size: 1.65rem;
  color: $p;
  width: 75%;
  text-indent: 10px;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.089);
}

#submit {
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.089);
}

#center-form {
  align-items: center;
}

.left {
  text-align: left;
}

#center {
  margin: auto;
  width: 90%;
}

.product {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 90px;
  border-radius: 5px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.089);
}

@media only screen and (max-width: 768px) {
  .left {
    text-align: center;
  }

  form {
    justify-content: center;
    input {
      width: 100%;
    }

    #submit {
      width: 100%;
    }
  }

  img {
    margin-bottom: 20px;
  }
}
</style>
