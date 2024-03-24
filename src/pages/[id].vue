<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';

import projet from '@/components/projet.vue';
const route = useRoute('/projet/[id]');
let {data : projet, error} = await supabase
    .from('Projet')
    .select(`
    *,
    
    `)
    .eq('id', route.params.id)
    .single();
console.log("data film",projet);
</script>

<template>
    <div>
        <projet v-bind="film" />
    </div>
</template>