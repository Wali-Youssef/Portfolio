<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/films/[id]');
import type { Database, Tables } from '@/supabase-types';
import { platform } from 'process';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
  <div class="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <img class="w-full h-auto rounded-lg shadow-lg" :src="image_film" :alt="nom" />
        </div>
        <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h2 class="text-3xl font-bold text-white">{{ nom_film }} 
            <!-- Affichage du genre à côté du titre -->
            <span v-for="(unGenre, index) in Genre" :key="index" class="text-sm text-gray-300 ml-2">{{ unGenre.genre_film }}</span>

            <!-- Affichage du genre à côté du titre -->
            <span v-for="(uneVaraiante, index) in Variante" :key="index" class="text-sm text-gray-300 ml-2">({{ uneVaraiante.type }})</span>
          </h2>
          <div class="flex items-center mt-2">
            <span class="text-yellow-500">

    
        
          
    

      
  
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 1.5l2.351 7.21H21l-6.046 4.399L16.6 22.5 12 18.732 7.4 22.5l1.647-9.391L3 8.71h6.649z"/>
              </svg>
            </span>
            <span class="text-white ml-1">{{ note_film}}/10</span>
          </div>
          <p class="text-gray-300 mt-4">{{ description2_film }}</p>
          <div class="mt-6">
            <a :href="image_film" target="_blank" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">Regarder la bande-annonce</a>
          </div>
          <div class="flex flex-col mt-6 md:flex-row md:space-x-6">
            <div>
              <h3 class="text-white">Plateforme</h3>
              <br>
              <div class="flex justify-center mt-4 md:mt-0">
                <div v-for="(UnePlateforme, index) in Plateforme" :key="index" class="flex flex-col items-center mx-2">
                  <img :src="UnePlateforme.logo" class="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover" :alt="UnePlateforme.plateforme_streaming" />
                  <p class="text-white">{{ UnePlateforme.plateforme_streaming }}</p>
                </div>
              </div>
            </div>
            <div class="mt-6 md:mt-0">
              <h3 class="text-white">Support</h3>
              <br>
              <div class="flex justify-center mt-4 md:mt-0">
                <div v-for="(unSupport, index) in Support" :key="index" class="flex flex-col items-center mx-2">
                  <img :src="unSupport.photo_support" class="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover" :alt="unSupport.photo_support" />
                  <p class="text-white">{{ unSupport.titre_support }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-white mt-6">Célébrités</h3>
            <br>

              <div class="flex justify-center mt-4">
                <div v-for="(uneCelebrite, index) in Celebrite" :key="index" class="flex flex-col  mx-4">
                  <RouterLink :to="{ name: '/celebrite/[id]', params: { id: uneCelebrite.id } }">
                  <img :src="uneCelebrite.photo_celebrite" class="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover" :alt="uneCelebrite.nom_celebrite" />
                  <p class="text-white">{{ uneCelebrite.nom_celebrite }}</p>
                </RouterLink>
                </div>

              </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>