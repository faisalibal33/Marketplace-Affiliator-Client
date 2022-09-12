<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView :products="products" :baseURL="baseURL" />
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      baseURL: "http://localhost:8800/api/package",
      products: [],
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get(`${this.baseURL}`)
        .then((res) => (this.products = res.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.router {
  margin: 20px;
}
</style>
