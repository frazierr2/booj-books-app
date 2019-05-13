<template>
  <div>
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
import Header from "@/components/Header.vue";
import ListView from "@/components/ListView.vue";

export default {
  name: "home",
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
      "https://cors-anywhere.herokuapp.com/https://www.librarything.com/api_getdata.php?userid=timspalding&showstructure=1&max=20&showCollections=1&showTags=1&booksort=title_REV&responseType=json",
      {
        method: "get"
        // mode: "no-cors",
      }
    )
      .then(response => {
        // console.log("response:", response);
        return response.json();
      })
      .then(jsonData => {
        // console.log("jsonData: ", JSON.stringify(jsonData));
        this.bookResults = Object.values(jsonData.books);
        // console.log(this.bookResults);
        // this.bookResults = jsonData.books;
      });
  }
};
</script>