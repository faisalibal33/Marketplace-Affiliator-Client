<template>
  <div class="c-container">
    <div class="categoryView">
      <div v-for="product of products" :key="product._id">
        <div>
          <CategoryBox :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "../../components/category/CategoryBox.vue";
export default {
  name: "Category",
  props: ["products"],
  components: { CategoryBox },
};
</script>

<!-- style -->
<style>
.c-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  max-width: 1200px;
}

.categoryView {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.top-c-button {
  bottom: 95%;
}
</style>
