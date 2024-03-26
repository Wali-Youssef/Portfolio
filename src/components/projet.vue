<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';

const router = useRouter();

// Props definition
defineProps<Database["public"]["Tables"]["Projet"]["Row"]>();

// Méthode pour revenir à la page précédente
const goBack = () => {
  router.go(-1);
}

</script>


<template>
  <div class="font-fira-code bg-custom-blue container mx-auto p-8 ">
    <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-bold mb-4 text-bleuneon">{{ nom_projet }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img :src="photo_projet" alt="Image du projet" class="rounded-lg w-full md:w-auto md:max-h-85 object-contain mx-auto">
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2 text-bleuneon">Description</h2>
          <p class="mb-4 text-slate-500">{{ description2_projet }}</p>
          <h2 class="text-xl font-semibold mb-2 text-bleuneon">Technologies Utilisées</h2>
          <ul class="list-disc ml-6 text-slate-500 ">
            <li>{{ technologie1_projet }}</li>
            <li>{{ technologie2_projet }}</li>
            <li>{{ technologie3_projet}}</li>
          </ul>
          <h2 class="text-xl font-semibold mb-2 mt-4 text-bleuneon">Lien vers le site</h2>
          <a href="#" class="text-slate-500">{{ lien_projet }}</a>
        </div>
      </div>
    </div>
    <!-- Flèche "Voir plus" pour le carrousel -->
    <a href="#carousel" class="block text-center mt-4 text-gray-500 hover:text-gray-700">
      Voir plus
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </a>

    

    <!-- Bouton Retour aux projets -->
    <button @click="goBack" class="fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Retour aux projets</button>
  </div>
</template>


