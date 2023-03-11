<template>
  <div>
    <Profile />
    <RouterView />
  </div>

  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Profile from "./components/Profile.vue";
import './assets/tailwind.css';

</script>