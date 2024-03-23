<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]}>()
</script>

<template>
    <div>


        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.nom_celebrite }}</p>
        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.prenom_celebrite }}</p>
        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.date_de_naissance }}</p>
        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.date_deces }}</p>
        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.description_celebrite }}</p>
        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.photo_celebrite }}</p>

    </div>
</template>