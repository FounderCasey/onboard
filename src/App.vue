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
  padding: 90px 0;
  max-width: 1198px;
  margin: auto;
  text-align: left;
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
  text-align: center;
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
</style>
