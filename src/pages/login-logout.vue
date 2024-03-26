<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>




<template>
  <div class="bg-custom-blue">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold pt-20 text-bleuneon">Connexion à l'interface d'administration</h1>
    </div>
  
    <div class="flex justify-center pt-8 ">
      <button v-if="user" @click="supabase.auth.signOut()" class="btn bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded md:mr-2 md:mb-0 mb-2 md:py-2 md:px-4">
        Se déconnecter ({{user.email}})
      </button>
      <button v-else @click="supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: 'https://portfolio.youssefwali.fr/projet/edit' } })" class="btn  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:mr-2 md:mb-0 mb-2 md:py-2 md:px-4">
        Se connecter avec Github
      </button>
    </div>
  </div>
  <div class="custom-cursor"></div>
</template>

