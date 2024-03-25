<script setup lang="ts">
import { ref } from "@vue/reactivity";
import projetcard from "@/components/projetcard.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const films = ref ({});
const route = useRoute('/projet/edit/[[id]]');
async function upsertFilm(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Projet").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/projet/edit/[[id]]", params:{id: data[0].id}});
    }
}
if (route.params.id) {
    const { data, error } = await supabase.from("Projet").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else films.value = data;
}
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <projetcard v-bind="films" />
        </div>
        <div class="p-2">
            <FormKit @submit="upsertFilm" type="form" v-model="films"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nom_projet" label="Titre du film" />
                <FormKit name="description_projet" label="Description du film" />
                
            </FormKit>
        </div>
    </div>
</template>