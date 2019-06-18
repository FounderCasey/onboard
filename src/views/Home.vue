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
        <form action>
          <input type="email" placeholder="Email">
          <button class="cta" id="submit">Stay Tuned</button>
        </form>
      </div>
      <img src="../assets/guyatcomputer.svg" class="flex-item">
    </section>
    <section class="flexbox">
      <div class="flex-item short center">
        <img class="icon" src="../assets/TeamIcon.svg">
        <h2>Team Members</h2>
        <p class="center">
          Onboarding new hires can be tough, especially with an
          abundance of documents. UpDocs creates a home for your
          onboarding materials.
        </p>
      </div>
      <div class="flex-item center">
        <img class="icon" src="../assets/customericon.svg">
        <h2>Customers</h2>
        <p class="center">
          Ensuring that your product has ample knowledge available
          is paramount. UpDocs ensures that your customers will
          always have that information provided.
        </p>
      </div>
    </section>
    <section class="flexbox">
      <img src="../assets/truck.svg" class="flex-item">
      <div class="flex-item short">
        <h2 id="left">Load your material in one place.</h2>
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
.icon {
  padding: 25px 0;
}

form {
  /* This bit sets up the horizontal layout */
  display: flex;
  flex-direction: row;
  width: 75%;
  margin-top: 35px;

  /* This bit draws the box around it */
  border-radius: 5px;
  box-shadow: 0 0 20px #0000002d;
  /* I've used padding so you can see the edges of the elements. */
  padding: 10px;
}

input {
  /* Tell the input to use all the available space */
  flex-grow: 1;
  /* And hide the input's outline, so the form looks like the outline */
  border: none;

  font-size: 1.65rem;
  padding: 10px 0;
  text-indent: 10px;
  color: $p;
}

input:focus {
  outline: none;
}

#submit {
  padding: 5px 10px;
}

#left {
  text-align: left;
}
</style>

