<template>
  <div class="navContainer">
    <div class="navWrapper">
      <ul class="navList">
        <router-link to="/" class="route">
          <li>Home</li>
        </router-link>
        <router-link to="/Category" class="route">
          <li>Product</li>
        </router-link>
        <router-link to="/addCategory" class="route">
          <li>Add Product</li>
        </router-link>
      </ul>
      <div class="searchWrapper">
        <div>
          <input type="text" class="inputSearch" />
        </div>
        <button class="buttonSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(106, 187, 0, 0.808);
  height: 60px;
}

.navWrapper {
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navList {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 10px;
  margin-top: 0;
}

.navList li {
  text-decoration: none;
  align-items: center;
  padding: 10px;
  color: white;
  list-style: none;
  font-size: 20px;
  cursor: pointer;
}

.navList li:hover {
  border-bottom: 2px solid white;
}

.searchWrapper {
  display: flex;
}

.inputSearch {
  height: 35px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 2px 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.inputSearch:hover {
  border: 1px solid rgba(248, 212, 9, 0.808);
}

.buttonSearch {
  padding: 0px 10px;
  border: none;
  background-color: white;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  color: rgba(106, 187, 0, 0.808);
}

.buttonSearch:hover {
  background-color: rgba(106, 187, 0, 0.808);
  color: white;
}

.route {
  text-decoration: none;
}
</style>
