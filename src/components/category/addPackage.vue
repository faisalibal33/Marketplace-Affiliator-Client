<template>
  <div class="containerCategory">
    <div class="addCategory">
      <div class="titleCategory">
        <h3>Add Category</h3>
      </div>
      <div class="formWrapper">
        <form class="formWrapper">
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Package Name"
              v-model="packageName"
            />
          </div>
          <div class="formInput">
            <textarea
              type="text"
              class="f-textArea"
              placeholder="Package Description"
              v-model="desc"
            />
          </div>
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Image Url"
              v-model="images"
            />
          </div>
          <div class="formInput">
            <select class="f-input" v-model="category">
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
              v-model="price"
            />
          </div>
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Url package"
              v-model="url"
            />
          </div>
          <div class="buttonWrapper">
            <button type="submit" class="button-c" @click="addCategory">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="addSuccess">
      <div v-if="addProduct === false">Add your new product NOW!!!!</div>
      <div v-if="addProduct === true">
        <CategoryBox :product="products[products.length - 1]" />
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from "sweetalert";
import axios from "axios";
import CategoryBox from "../../components/category/CategoryBox.vue";

export default {
  props: ["products"],
  components: { CategoryBox },
  data() {
    return {
      addProduct: false,
      packageName: "",
      category: "",
      desc: "",
      images: "",
      price: null,
      url: "",
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
    addCategory(e) {
      e.preventDefault();

      const newCategory = {
        packageName: this.packageName,
        category: this.category,
        desc: this.desc,
        images: this.images,
        price: this.price,
        url: this.url,
      };

      const urlBase = "http://localhost:8800/api/package";
      axios
        .post(`${urlBase}`, newCategory)
        .then(() => {
          sweetalert({
            text: "Package Added Succesfully",
            icon: "success",
          });
          this.$emit("fetchData");
          this.addProduct = true;
        })
        .catch((err) => {
          console.log("ada yang salah");
          console.log(err);
        });
    },
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
