<template>
  <div class="c-container">
    <div class="categoryView">
      <div v-for="paket of packages" :key="paket._id">
        <CategoryBox :packages="paket" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CategoryBox from "../../components/category/CategoryBox.vue";
export default {
  name: "Category",
  components: { CategoryBox },
  data() {
    return {
      packages: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get("http://localhost:8800/api/package")
        .then((res) => (this.packages = res.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<!-- style -->
<style>
.c-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  max-width: 1300px;
}

.categoryView {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 20px;
}

.top-c-button {
  bottom: 95%;
}
</style>
