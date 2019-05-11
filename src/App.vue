<template>
  <div id="app">
    <Header :title="title" :slogan="slogan"/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="10" offset="1">
          <ListView :bookResults="bookResults"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ListView from "./components/ListView.vue";

export default {
  name: "app",
  components: {
    Header,
    ListView
  },
  data() {
    return {
      title: "booj books",
      slogan: "be original or jealous",
      bookResults: []
    };
  },
  mounted() {
    fetch(
      "http://www.librarything.com/api_getdata.php?userid=timspalding&showstructure=1&max=20&showCollections=1&showTags=1&booksort=title_REV&responseType=json",
      {
        method: "get"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.bookResults = Object.values(jsonData.books);
        // console.log(this.bookResults);
        // this.bookResults = jsonData.books;
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
