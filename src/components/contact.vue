<template>
  <div class="bg-custom-blue">
    <div class="max-w-4xl mx-auto px-4">
      
      <div class="flex flex-wrap">
        <!-- Colonne de texte -->
        <div class="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
          <h2 class="text-3xl font-bold mb-6 text-bleuneon relative">
            04. Contactez-moi
            <!-- Barre sous le titre -->
            <span class="block h-1 w-16 bg-bleuneon mt-2"></span>
          </h2>
        </div>
      </div>
      
      <br>
      <br>
      
      <form
        action="https://formspree.io/f/mvoebkgy"
        method="POST"
        class="max-w-lg mx-auto"
      >
        <div class="mb-4">
          <label class="block text-xl mb-2 text-bleuneon" for="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Votre nom" class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:bg-gray-700">
        </div>
        <div class="mb-4">
          <label class="block text-xl mb-2 text-bleuneon" for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Votre email" class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:bg-gray-700">
        </div>
        <div class="mb-4">
          <label class="block text-xl mb-2 text-bleuneon" for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Votre message" class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:bg-gray-700"></textarea>
        </div>
        <button type="submit" class="bg-gray-800 hover:bg-bleuneon px-6 py-3 rounded-lg font-bold text-xl w-full">Envoyer</button>
      </form>
    </div>
  </div>
</template>
