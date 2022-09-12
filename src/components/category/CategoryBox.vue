<template>
  <div class="categoryCard">
    <div class="cardImg">
      <img :src="product.images" alt="Category image" />
      <router-link :to="{ name: 'EditCategory', params: { id: product._id } }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-three-dots-vertical dotsPos"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </router-link>
    </div>
    <div class="categoryName">
      <h4>{{ product.packageName }}</h4>
    </div>
    <div class="categoryDesc">
      <p>{{ product.desc.substring(0, 65) }}...</p>
    </div>
    <div class="button-c-box">
      <p class="price">Rp. {{ product.price }}</p>
      <button class="buttonChart">add to chart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["product"],
  methods: {},
};
</script>

<style>
.categoryCard {
  position: relative;
  border: 1px solid rgba(106, 187, 0, 0.808);
  border-radius: 10px;
  height: 300px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
}

.cardImg {
  overflow: hidden;
  width: 100%;
  height: 50%;
}

.dotsPos {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
}

.dotsPos:hover {
  color: rgba(106, 187, 0, 0.808);
}

.cardImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cardImg img:active {
  object-fit: contain;
}

.categoryName {
  padding: 0px 10px;
}

.categoryDesc {
  padding: 0px 10px;
}

.buttonChart {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 7px 10px;
  border: none;
  color: white;
  background: rgba(106, 187, 0, 0.808);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s ease;
}

.buttonChart:hover {
  color: rgba(106, 187, 0, 0.808);
  background: white;
}
</style>
