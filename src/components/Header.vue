<template>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">

    <header class="bg-custom-blue sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">


        <nav class="container relative flex items-center justify-between px-6 py-8 text-white ">
            <a href="/">
                <img src="../assets/logo1.svg" alt="Logo" class="w-12 h-12" />
            </a>

            <button @click="open = !open" class="md:hidden">
                <span v-show="!open">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </span>
                <span v-show="open">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>

            <div :class="open ? ' translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'"
                class=" ml-auto  absolute inset-x-0 z-30 w-full px-6 py-8 mt-4 space-y-6 transition-all duration-300 ease-in-out bg-custom-blue top-16 md:mt-0 md:p-0   md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0  md:flex md:items-center md:ml- ">

                <a href="#qui-je-suis" @click="scrollToSection($event, '#qui-je-suis')" class=" block transition-colors duration-300  hover:text-bleuneon">
                    <span class="text-bleuneon font-fira-code  ">&nbsp01.</span> <span
                        class="text-[color-code-for-text] font-fira-code"> Qui je
                        suis ?</span>
                </a>
                <a href="#" class="block transition-colors duration-300 md:px-6 hover:text-bleuneon">
                    <span class="text-bleuneon font-fira-code ">&nbsp02.</span> <span
                        class="text-[color-code-for-text] font-fira-code"> Mes
                        compétences</span>
                </a>
                <a href="#" class="block transition-colors duration-300 md:px-6 hover:text-bleuneon">
                    <span class="text-bleuneon font-fira-code">&nbsp03.</span> <span
                        class="text-[color-code-for-text] font-fira-code"> Mes
                        projets</span>
                </a>
                <a href="#" class="block transition-colors duration-300 md:px-6 hover:text-bleuneon">
                    <span class="text-bleuneon font-fira-code">&nbsp04.</span> <span
                        class="text-[color-code-for-text] font-fira-code"> Contact</span>
                </a>
            </div>




        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let open = ref(false);

function scrollToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();

    const section = document.querySelector(sectionId) as HTMLElement | null;
    if (section) {
        const offset = section.offsetTop - 50; // Adjust this value according to your needs
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}

</script>