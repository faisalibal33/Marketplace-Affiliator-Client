<template>
  <div class="categoryCard">
    <div class="cardImg">
      <img :src="product.images" alt="Category image" />
      <div class="editDelete">
        <router-link
          :to="{ name: 'EditCategory', params: { id: product._id } }"
          class="router-link"
        >
          <div class="editDel">
            <p>Edit</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
        </router-link>
        <div class="editDel">
          <p>Delete</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
      </div>

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
.router-link {
  text-decoration: none;
  color: black;
}
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
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50%;
}

.editDelete {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  top: 40px;
  right: 20px;
  width: 100px;
  border-radius: 4px;
}

.editDel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 10px;
}

.editDel:hover {
  background-color: rgba(106, 187, 0, 0.808);
  color: white;
}

.editDel p {
  margin-bottom: 0px;
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
