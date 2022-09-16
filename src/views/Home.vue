<template>
  <div>
    <h3>Home</h3>
    <router-link :to="{ path: '/login' }">Navegar para "/login"</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>