<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import intro from '@/components/intro.vue';
import moi from '@/components/moi.vue';
import competence from '@/components/competence.vue';
import projet from '@/components/projet.vue';
import contact from '@/components/contact.vue';
import projetcard from '@/components/projetcard.vue';
import { supabase } from '@/supabase';

export default defineComponent({
    name: 'TypeEffectComponent',
    setup() {
        const tableauprojet = ref([]);

        onMounted(async () => {
            let { data, error } = await supabase
                .from('Projet')
                .select('*');
            if (error) {
                console.error("Erreur lors du chargement des projets:", error.message);
            } else {
                tableauprojet.value = data || [];
            }
            typeEffectInit();
        });

        function typeEffect(element: HTMLElement, speed: number, callback: () => void): void {
            const text: string | null = element.getAttribute('data-text');
            if (text) {
                element.innerText = "";
                let i: number = 0;
                const timer = setInterval(() => {
                    if (i < text.length) {
                        element.append(text.charAt(i));
                        i++;
                    }
                    else {
                        clearInterval(timer);
                        callback();
                    }
                }, speed);
            }
        }

        function typeEffectInit(): void {
            const firstElements: NodeListOf<HTMLElement> = document.querySelectorAll('.first');
            let delay: number = 0;
            firstElements.forEach((element, index) => {
                setTimeout(() => {
                    typeEffect(element, 100, () => {
                        if (index === firstElements.length - 1) {
                            const restElements: NodeListOf<HTMLElement> = document.querySelectorAll('.rest');
                            restElements.forEach((element) => {
                                element.classList.remove('opacity-0');
                                element.classList.add('fade-in-up');
                            });
                        }
                    });
                }, delay);
                delay += (element.getAttribute('data-text')?.length ?? 0) * 100;
            });
        }

        return { tableauprojet };
    },
    components: { competence, moi, intro, projet, contact, projetcard }
});

</script>

<style>


.fade-in-up {
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Commencez avec le texte invisible pour les éléments avec la classe 'rest' */
.rest {
  opacity: 0;
}


</style>

<template>
  <main class="font-fira-code text-white relative">
    <intro /> 
    <moi />
    <competence />

<div class="bg-custom-blue">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-4  bg-custom-blue " >
        <!-- Utilisez projetcard à la place de AfficheFilm -->
        <projetcard v-for="projet in tableauprojet" v-bind="projet" :key="projet.id" />
    </div>

  </div>
    <contact />

    
  </main>
</template>
