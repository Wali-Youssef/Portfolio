<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';
// import type { TypesFilm } from '@/types';
// defineProps<TypesFilm>();
defineProps <Database["public"]["Tables"]["Celebrite"]["Row"] & {Films:Tables<'Films'>[]}>()
const route = useRoute('/celebrite/[id]');
// let {data : data, error} = await supabase
//     .from('films')
//     .select('*')
//     .eq('id', route.params.id)
//     .single();
</script>


<template>
  <div class="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <img class="w-full h-auto rounded-lg shadow-lg" :src="photo_celebrite" :alt="nom_celebrite" />
        </div>
        <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h2 class="text-3xl font-bold text-white">{{ nom_celebrite }} {{ prenom_celebrite }}</h2>
          <div class="flex items-center mt-2">
            <span class="text-white">{{ date_de_naissance }}</span>
            <span v-if="date_deces" class="text-white ml-2">- {{ date_deces }}</span>
          </div>
          <p class="text-gray-300 mt-4">{{ description_celebrite }}</p>
        </div>
      </div>
    </div>


  <div class="container mx-auto my-8">
    <h2 class="text-2xl font-bold text-white mb-4">Films</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div v-for="unFilm in Films" :key="unFilm.id" class="text-black flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-4">
        <RouterLink :to="{ name: '/films/[id]', params: { id: unFilm.id } }">
          <img class="w-48 h-auto rounded-lg mb-4" :src="unFilm.image_film ?? undefined" :alt="unFilm.nom_film" />
          <p class="text-white text-center">{{ unFilm.nom_film }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
  </div>
</template>