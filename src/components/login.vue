<template>
    <div :class="{ 'bg-custom-blue': isAuthenticated }">
      <button v-if="user" @pointerdown="supabase.auth.signOut()" class="button">
          Se déconnecter ({{ user.email }})
      </button>
      <button v-else @pointerdown="supabase.auth.signInWithOAuth({ provider: 'github' })" class="button">
          Se connecter avec Github
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { supabase, user } from '../supabase';
  
  const isAuthenticated = user !== null;
  </script>
  
  <style scoped>
  .bg-custom-blue {
    background-color: #007bff;
  }
  
  .button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    margin: 4px;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  