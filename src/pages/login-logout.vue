<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>

<template>
  <div>
    <button v-if="user" @click="supabase.auth.signOut()">
      Se déconnecter ({{user.email}})
    </button>
    <button v-else @click="supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: 'https://portfolio.youssefwali.fr/projet/edit' } })">
      Se connecter avec Github
    </button>
  </div>
</template>
