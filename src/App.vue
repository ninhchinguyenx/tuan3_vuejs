<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sidebar">
    <h2>
      <RouterLink to="/">Admin Panel</RouterLink>
    </h2>
    <ul>
      <li>
        <RouterLink to="/user">Quản lý User</RouterLink>
      </li>
    </ul>
  </div>
  <RouterView />
</template>

<style>
body {
  display: flex;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background: #333;
  color: white;
  padding-top: 20px;
  position: fixed;
}

.sidebar h2 {
  text-align: center;
  margin-bottom: 20px;

}

.sidebar h2 a {
  color: #fff;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #444;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  display: block;
}

.sidebar ul li:hover {
  background: #555;
}

.main-content {
  margin-left: 250px;
  padding: 20px;
  width: 100%;
}

.actions button {
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.actions button:hover {
  opacity: 0.8;
}

.actions button:nth-child(1) {
  background-color: #ffc107;
  color: black;
}

.actions button:nth-child(2) {
  background-color: #dc3545;
  color: white;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>
