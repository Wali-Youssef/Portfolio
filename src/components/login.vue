<template>
    <div>
      <button v-if="userIsAllowedToSignIn" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{ user.email }})
      </button>
      <button v-else disabled>
        Se connecter avec Github
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { supabase, user } from '../supabase';
  
  const allowedUserEmail = 'youssef.wali@edu.univ-fcomte.fr'; // Remplacez par votre adresse email
  
  const userIsAllowedToSignIn = user.value && user.value.email === allowedUserEmail;
  </script>
  