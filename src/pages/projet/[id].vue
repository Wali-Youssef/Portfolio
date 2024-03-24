<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import projetid from '@/components/projet.vue';

const route = useRoute('/projet/[id]');

// Message de débogage pour vérifier l'ID du projet extrait de l'URL
console.log("ID du projet dans l'URL :", route.params.id);

// Envoi de la requête à Supabase pour récupérer les données du projet
console.log("Requête envoyée à Supabase :", supabase
    .from('Projet')
    .select('*')
    .eq('id', route.params.id)
    .single()
);

// Récupération des données du projet depuis Supabase
let { data: projet, error } = await supabase
    .from('Projet')
    .select('*')
    .eq('id', route.params.id)
    .single();

// Affichage de la réponse de Supabase
console.log("Réponse de Supabase :", projet);
</script>

<template>
    <div>
        <projetid v-bind="projet" />
    </div>
</template>
