<template>
  <div class="containerCategory">
    <div class="addCategory">
      <div class="titleCategory">
        <h3>Edit Product</h3>
      </div>
      <div class="formWrapper">
        <form class="formWrapper" v-if="product">
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Package Name"
              v-model="product.packageName"
            />
          </div>
          <div class="formInput">
            <textarea
              type="text"
              class="f-textArea"
              placeholder="Package Description"
              v-model="product.desc"
            />
          </div>
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Image Url"
              v-model="product.images"
            />
          </div>
          <div class="formInput">
            <select class="f-input" v-model="product.category">
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </div>
          <div class="formInput">
            <input
              type="number"
              class="f-input"
              placeholder="Price"
              v-model="product.price"
            />
          </div>
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Url package"
              v-model="product.url"
            />
          </div>
          <div class="buttonWrapper">
            <button type="submit" class="button-c" @click="editCategory">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from "sweetalert";
import axios from "axios";

export default {
  props: ["baseURL", "products"],

  data() {
    return {
      product: null,
      id: null,
      categories: [
        "style",
        "dekorasi",
        "fashion",
        "hoby",
        "elektronik",
        "dapur",
      ],
    };
  },
  methods: {
    editCategory(e) {
      e.preventDefault();
      console.log(this.product);
      axios
        .put(`${this.baseURL}/${this.product._id}`, this.product)
        .then(() => {
          sweetalert({
            text: "Product has been updated succesfully",
            icon: "success",
          });
          this.addProduct = true;
        })
        .catch((err) => {
          console.log("ada yang salah");
          console.log(err);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product._id == this.id);
  },
};
</script>

<style>
.containerCategory {
  display: grid;
  grid-template-columns: 60% 40%;
  max-width: 1300px;
  height: 100vh;
  position: relative;
}

.addCategory {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid rgba(106, 187, 0, 0.808);
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 500px;
  height: fit-content;
  justify-content: center;
  align-items: center;
}

.formInput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}

.f-input {
  border-radius: 5px;
  height: 40px;
  border: 1px solid #aaaaaa;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.f-textArea {
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.f-input:hover {
  border: 1px solid rgba(106, 187, 0, 0.808);
}

.buttonWrapper {
  height: 50px;
}

.button-c {
  position: absolute;
  justify-content: flex-end;
  border-radius: 3px;
  border: 1px solid rgba(106, 187, 0, 0.808);
  background-color: rgba(106, 187, 0, 0.808);
  font-size: 15px;
  padding: 7px 20px;
  color: white;
  border: none;
  bottom: 10px;
  right: 100px;
  transition: 0.3s all ease;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.button-c:hover {
  background-color: white;
  color: rgba(106, 187, 0, 0.808);
  border: 1px solid rgba(106, 187, 0, 0.808);
}
</style>
