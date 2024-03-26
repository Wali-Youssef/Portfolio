<template>

<section class="bg-custom-blue py-0" id="mes-competence">
    <div class="max-w-4xl mx-auto px-4">
        <br>
        <br>
        <br>
        <br>
            <div class="flex flex-wrap -mx-4 ">
              <!-- Colonne de texte -->
              <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <h2 class="text-3xl font-bold mb-6 text-bleuneon relative">
                  02. Mes compétences
                  <!-- Barre sous le titre -->
                  <span class="block h-1 w-16 bg-bleuneon mt-2"></span>
                </h2>
               
        
              </div>
            </div>
    </div>

    
    <div class="scroll" style="--time:20s">
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VueJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VueJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
        </div>
        <div class="scroll" style="--time:30s">
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VueJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VueJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
        </div>
        <div class="scroll" style="--time:25s">
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VueJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VuejsJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
        </div>
        <div class="scroll" style="--time:40s">
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VueJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
            <div>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VueJS</span>
                <span>Figma</span>
                <span>Photoshop</span>
                <span>WordPress</span>
                <span>Figma</span>
                <span>Tailwind CSS</span>
                <span>Node JS</span>
            </div>
        </div>

        <div class="scroll imgBox" style="--time:25s">
            <div>
                <img src="../assets/html.png" alt="">
                <img src="../assets/css.png" alt="">
                <img src="../assets/vue.png" alt="">
                <img src="../assets/wordpress.png" alt="">
                <img src="../assets/vscode.png" alt="">
                <img src="../assets/figma.png" alt="">
                <img src="../assets/photoshop.png" alt="">
                <img src="../assets/supabase.png" alt="">
                <img src="../assets/tailwind.png" alt="">
                <img src="../assets/pocketbase.png" alt="">
            </div>
            <div>
                <img src="../assets/html.png" alt="">
                    <img src="../assets/css.png" alt="">
                    <img src="../assets/vue.png" alt="">
                    <img src="../assets/wordpress.png" alt="">
                    <img src="../assets/vscode.png" alt="">
                    <img src="../assets/figma.png" alt="">
                    <img src="../assets/photoshop.png" alt="">
                    <img src="../assets/supabase.png" alt="">
                    <img src="../assets/tailwind.png" alt="">
                    <img src="../assets/pocketbase.png" alt="">
            </div>
        </div>

        
    </section>

    <div class="#projects-section bg-custom-blue" >
    <div class="max-w-4xl mx-auto px-4">
      <br>
      <br>
      <br>
      <br>
      <div class="flex flex-wrap -mx-4">
        <!-- Colonne de texte -->
        <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2 class="text-3xl font-bold mb-6 text-bleuneon relative">
            03. Mes projets
            <!-- Barre sous le titre -->
            <span class="block h-1 w-16 bg-bleuneon mt-2"></span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>


<style>



.scroll {
    position: relative;
    display: flex;
    width: 100%; /* Ajusté pour prendre toute la largeur */
    max-width: 700px; /* Largeur maximale pour conserver le design */
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
    margin: 0 auto; /* Centre horizontalement */
}
.scroll div {
    white-space: nowrap;
    animation: scroll var(--time) linear infinite;
    animation-delay: calc(var(--time)*-1);

}

.scroll div:nth-child(2) {
    animation: scroll2 var(--time) linear infinite;
    animation-delay: calc(var(--time)/-2);
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes scroll2 {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-200%);
    }
}

.scroll div span {
    display: inline-flex;
    margin: 10px;
    letter-spacing: 0.2em;
    background: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.5s;
}

.scroll div span:hover {
    background: #4BE6C8;
    cursor: pointer;
}

.imgBox div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.imgBox img {
    max-width: 100px;
    scale: 0.8;
}
</style>