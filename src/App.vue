<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  
  <div class="wrapper">
    <Sidebar />
    
    <div class="main">
      <main class="content">
        <router-view />
      </main>
    </div>
  
  </div>

</template>

<style scoped>

</style>
