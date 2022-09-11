<template>
  <div class="navContainer">
    <div class="navWrapper">
      <ul class="navList">
        <router-link to="/" class="route">
          <li>Home</li>
        </router-link>
        <router-link to="/addCategory" class="route">
          <li>Category</li>
        </router-link>
        <router-link to="/login" class="route">
          <li>Admin</li>
        </router-link>
      </ul>
      <div class="searchWrapper">
        <div>
          <input type="text" class="inputSearch" />
        </div>
        <button class="buttonSearch">Search</button>
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
  gap: 10px;
}

.inputSearch {
  height: 35px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 2px 10px;
}

.inputSearch:hover {
  border: 1px solid rgba(248, 212, 9, 0.808);
}

.buttonSearch {
  padding: 0px 10px;
  border: none;
  background-color: white;
  border-radius: 4px;
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
