<template>
  <div id="listing-container">
    <h5 class="instruction-text">Hover over titles for more info:</h5>
    <b-list-group>
      <b-list-group-item
        v-for="(book, index) of bookResults"
        :key="index"
        @mouseover="isHovered = true"
        @mouseout="isHovered = false"
      >
        <b-row>
          <b-col cols="9">{{ book.title }}</b-col>
          <b-col cols="3" v-show="isHovered">
            <b-row>
              <b-col class="p-0 details" cols="9" @click="showDetails(index)">Details</b-col>
              <b-col class="p-0 delete-icon" cols="3" @click="deleteRow(book, index)">
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
export default {
  props: {
    bookResults: Array
  },
  data() {
    return {
      isHovered: false
    };
  },
  watch: {
    bookResults: {
      immediate: true,
      handler() {}
    }
  },
  methods: {
    showDetails(index) {
      console.log(index);
    },
    deleteRow(book, index) {
      //   this.bookResults.pop(index);
      console.log(JSON.stringify(book) + index);
    }
  }
};
</script>


<style scoped>
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



