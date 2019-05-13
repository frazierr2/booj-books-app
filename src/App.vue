<template>
  <div id="app">
    <b-nav>
      <b-nav-item>
        <router-link to="/booj-books-app" class="home-button">Home</router-link>
      </b-nav-item>
    </b-nav>

    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.home-button {
  color: grey;
}
</style>
