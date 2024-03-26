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

    
    <div class="carousel bg-gray-500 relative container mx-auto mt-5" style="max-width:1600px;">
  <div class="carousel-inner relative overflow-hidden w-full">
    <!--Slide 1-->
    <input class="carousel-open " type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
    <div class="carousel-item absolute opacity-0" style="height:80vh;">
      <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url(chemin/vers/image_projet)">
  <!-- Ajoutez votre image ici -->
  <img :src="img1_projet" alt="Description de l'image">


<!--  add any content in this box  -->
<div class="container mx-auto">    </div> 

      </div>
    </div>
    
    <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

    <!--Slide 2-->
    <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
    <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height:80vh;">
      <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url(chemin/vers/image_projet)">
  <!-- Ajoutez votre image ici -->
  <img :src="img3_projet" alt="Description de l'image">
    </div>
    </div>
    <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

    <!--Slide 3-->
    <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
    <div class="carousel-item absolute opacity-0" style="height:80vh;">
      <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMzcwMDk1NA&ixlib=rb-1.2.1&q=85;">

<img :src="img2_projet" alt="Description de l'image">

      </div>
    </div>
    <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

    <!-- slide indicators -->
    <ol class="carousel-indicators">
      <li class="inline-block mr-3">
        <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
      </li>
      <li class="inline-block mr-3">
        <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
      </li>
      <li class="inline-block mr-3">
        <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
      </li>
    </ol>

  </div>
</div>

<div class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="text-2xl font-bold mb-4 text-bleuneon">Conception du Site</h2>
      <p class="mb-4 text-slate-500">{{ conception_projet }}.</p>
      
    </div>


    <!-- Bouton Retour aux projets -->
    <button @click="goBack" class="fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Retour aux projets</button>
  </div>
</template>


