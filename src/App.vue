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

.cta {
  background: $a;
  border: solid 1px $a;
  outline: none;
  color: $w;
  font-size: 1.55rem;
  font-weight: 500;
  padding: 15px 30px;
  border-radius: 5px;
}

.cancel-btn {
  border: solid 1px rgb(255, 31, 31);
  color: rgb(255, 31, 31);
  background: transparent;
  margin-left: 20px;
}

.center {
  text-align: center;
}

.article-p {
  font-size: 1.3rem;
}

.article-textarea {
  font-size: 1.3rem;
  color: $p;
  border: none;
  outline: none;
  font-weight: 300;
  padding: 0;
  margin: 0;
  display: inline-block;
}

.article-h3 {
  font-size: 1.5rem;
  margin-top: 0;
  margin-left: 8px;
}

.pointer:hover {
  cursor: pointer;
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
