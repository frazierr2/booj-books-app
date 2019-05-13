<template>
  <div id="listing-container">
    <h5 class="instruction-text">Hover over titles for more info:</h5>
    <b-button variant="outline-primary" @click="shuffleBooks">Shuffle List</b-button>
    <b-dropdown id="dropdown-1" variant="outline-success" text="Sort By" class="m-md-2">
      <b-dropdown-item @click="sortTitle">Title</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="sortAuthor">Author</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="sortDate">Release Date</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="reverseList">Reverse List</b-dropdown-item>
    </b-dropdown>
    <b-button variant="outline-danger">Add New Book</b-button>
    <b-list-group>
      <b-list-group-item
        v-for="(book, index) in shuffledBooks"
        :key="index"
        @mouseover="selectedRow(index)"
      >
        <b-row>
          <b-col cols="9">{{ book.title }}</b-col>
          <b-col cols="3" v-show="isHovered">
            <b-row>
              <b-col class="p-0 details" cols="9">Details</b-col>
              <b-col class="p-0 delete-icon" cols="3" @click="deleteRow(index)">
                <font-awesome-icon icon="trash"/>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "ListView",
  props: {
    bookResults: Array
  },
  data() {
    return {
      isHovered: true,
      shuffledBooks: [],
      results: []
    };
  },
  computed: {},
  watch: {
    bookResults: {
      immediate: true,
      handler() {
        this.shuffleBooks();
      }
    }
  },
  methods: {
    selectedRow(index) {
      this.bookResults[index];
      //   console.log(this.bookResults[index]);
    },
    // showDetails(index) {
    //   console.log(index);
    // },
    deleteRow(index) {
      this.$delete(this.bookResults, index);
    },
    shuffleBooks() {
      let books = [...this.bookResults];
      this.shuffledBooks = _.shuffle(books);
    },
    sortTitle() {
      this.shuffledBooks = _.sortBy(this.shuffledBooks, book => book.title);
    },
    sortAuthor() {
      this.shuffledBooks = _.sortBy(this.shuffledBooks, book => book.author_fl);
    },
    sortDate() {
      this.shuffledBooks = _.sortBy(
        this.shuffledBooks,
        book => book.publicationdate
      );
    },
    reverseList() {
      this.shuffledBooks.reverse();
    }
  }
};
</script>


<style scoped>
.btn {
  margin: 10px;
}
.instruction-text {
  margin-top: 20px;
}
.list-group {
  margin-top: 15px;
}
.list-group-item {
  margin-bottom: 5px;
}
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
.details {
  font-size: 14px;
}
.delete-icon:hover {
  color: red;
}
</style>



