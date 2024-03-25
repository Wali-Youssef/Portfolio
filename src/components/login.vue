<template>
    <div>
      <button v-if="userIsAllowedToSignIn" @click="signOut" class="button">
        Se déconnecter ({{ user.email }})
      </button>
      <button v-else @click="signInWithGithub" class="button">
        Se connecter avec Github
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { supabase, user } from '../supabase';
  
  const allowedUserEmail = 'youssef.wali@edu.univ-fcomte.fr'; // Remplacez par votre adresse email
  
  const userIsAllowedToSignIn = user.value && user.value.email === allowedUserEmail;
  
  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error.message);
      // Gérer les erreurs de déconnexion ici
    }
  };
  
  const signInWithGithub = async () => {
    try {
      await supabase.auth.signInWithOAuth({ provider: 'github' });
    } catch (error) {
      console.error('Erreur lors de la connexion avec Github:', error.message);
      // Gérer les erreurs de connexion ici
    }
  };
  </script>
  
  <style scoped>
  .button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    margin-right: 8px;
  }
  
  .disabled-button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    margin-right: 8px;
  }
  </style>
  