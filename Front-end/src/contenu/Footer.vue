<script setup>
  import ScrollPos from "../components/Scroll-pos.vue";
</script>

<template>
  <footer class="w-full">
    <ScrollPos></ScrollPos>
    <div class="bg-zinc-900 flex py-2 px-5 justify-between">
      <div class="flex">
        <img alt="Your Company" class="h-8 w-8 mr-4" src="/src/assets/goldfishfish.svg"/>
        <h5 class="text-xl text-white">
          Développeur Web Freelance & Webdesigner Indépendant
        </h5>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/christophe-mestdagh-3a6002217/">
          <img alt="linkedin"
               class="h-8 w-8 mr-4"
               src="/src/assets/LinkedIn_icon_circle.svg">
        </a>
      </div>
    </div>
    <div class="bg-zinc-700 flex max-md:flex-col p-5 dark:bg-zinc-800">
      <div>
        <p class="w-3/6 text-white max-md:py-2 max-md:w-full">
          En tant que développeur web indépendant, je suis spécialisé dans le développement web front-end et back-end,
          ainsi que dans le design web. Je suis là pour prendre en charge une variété de projets, que ce soit pour la
          création de sites internet, le développement sur mesure ou la conception d'applications web.
          Mon expertise est centrée sur les technologies web, et je suis passionné par l'évolution constante de cet
          univers. Je mets en œuvre mes compétences pour répondre à vos besoins dans divers domaines.
        </p>
      </div>
      <div class="text-white w-2/5 max-md:w-full">
        <h5 class="underline">GoldFishWeb</h5>
        <ul class="max-md:py-2">
          <li class="pl-1">📞 06-11-53-31-80</li>
          <li  class="pl-1">📧 christophe.mestdagh@goldfishweb.fr</li>
          <li class="pl-1">@<a  class="pl-2" href="https://mestdagh-christophe.ovh/">Mon PortFolio</a></li>
        </ul>
      </div>
    </div>
    <div class="bg-zinc-900 text-center text-white py-2 px-5">
      <p>Goldfishweb © 2023</p>
    </div>
  </footer>
</template>