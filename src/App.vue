<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: $font;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $h;
  height: 100%;
}

section {
  padding: 90px 30px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.top {
  padding-top: 0;
}

.nav-section {
  padding: 0;
}

.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .flex-item {
    width: 50%;
  }

  .short {
    width: 45%;
  }
}

h1 {
  font-size: 3.75rem;
  margin: 0;
}

h2 {
  font-size: 2.75rem;
  margin: 0;
}

p {
  color: $p;
  font-size: 1.55rem;
  font-weight: 300;
}

button:hover {
  cursor: pointer;
}

input {
  border: 1px solid $a;
  outline: none;
  border-radius: 5px;
  font-size: 1.65rem;
  color: $p;
  width: 75%;
  text-indent: 10px;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.089);
}

.cta {
  background: $a;
  border: none;
  outline: none;
  color: $w;
  font-size: 1.55rem;
  font-weight: 500;
  padding: 15px 30px;
  border-radius: 5px;
}

.center {
  text-align: center;
}

@media only screen and (max-width: 768px) {
  section {
    padding: 25px 10px;
    width: 90%;
    text-align: center;
  }

  .flexbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .flex-item {
      width: 90%;
    }

    .short {
      width: 90%;
    }
  }
  .left {
    text-align: center;
  }

  h1 {
    font-size: 2.75rem;
    margin: 0;
  }

  h2 {
    font-size: 1.75rem;
    margin: 0;
  }

  .flex-item {
    margin: auto;
  }

  p {
    color: $p;
    font-size: 1.15rem;
    font-weight: 300;
  }
}
</style>
