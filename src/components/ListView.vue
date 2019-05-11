<template>
  <div id="listing-container">
    <h5>Hover over titles for more info:</h5>
    <b-list-group>
      <b-list-group-item v-for="(book, index) in bookResults" :key="index">
        <b-row>
          <b-col cols="9">{{ book.title }}</b-col>
          <b-col cols="3" v-show="isHovered">
            <b-row>
              <b-col class="p-0 details" cols="9" @click="showDetails">Details</b-col>
              <b-col class="p-0 delete-icon" cols="3" @click="deleteRow">
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
    bookResults: Object
  },
  data() {
    return {
      isHovered: true
    };
  },
  methods: {
    showDetails() {
      console.log("Showed Details");
    },
    deleteRow() {
      console.log("Delete Row");
    }
  }
};
</script>


<style scoped>
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



