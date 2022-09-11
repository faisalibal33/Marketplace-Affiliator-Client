<template>
  <div class="categoryCard">
    <div class="cardImg">
      <img :src="packages.images" alt="Category image" />
    </div>
    <div class="categoryName">
      <h4>{{ packages.packageName }}</h4>
    </div>
    <div class="categoryDesc">
      <p>{{ packages.desc }}</p>
    </div>
    <div class="button-c-box">
      <button class="buttonChart">add to chart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["packages"],
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
}

.cardImg {
  width: 100%;
  height: 50%;
}

.cardImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.cardImg img:hover {
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
