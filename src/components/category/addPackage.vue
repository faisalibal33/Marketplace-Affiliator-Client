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
            <input
              type="text"
              class="f-input"
              placeholder="Category"
              v-model="category"
            />
          </div>
          <div class="formInput">
            <input
              type="text"
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
  </div>
</template>

<script>
import sweetalert from "sweetalert";
import axios from "axios";

export default {
  data() {
    return {
      packageName: "",
      category: "",
      desc: "",
      images: "",
      price: 0,
      url: "",
    };
  },
  methods: {
    addCategory(e) {
      e.preventDefault();
      console.log(
        this.packageName,
        this.category,
        this.desc,
        this.images,
        this.price,
        this.url
      );
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
  top: 50%;
  transform: translateY(50%);
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
  width: 60%;
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
