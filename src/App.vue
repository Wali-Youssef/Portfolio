<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {  user } from '@/supabase';
console.log("user :",user.value);
</script>

<template>
  <Header />
  <Suspense>
    <RouterView />
  </Suspense>
  <Footer />
</template>