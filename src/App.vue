<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/nouveau">La page du Clique</router-link> |
    <router-link to="/about">About</router-link> |
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #1f31a9;
    }
  }
}
</style>
