<script setup>
import Nav from '/src/components/Nav.vue'</script>

<template>
  <header>
    <div class="h-20">
      <Nav></Nav>
    </div>
    <main>
      <div class="mx-auto flex justify-center items-center">
        <div class="absolute text-white text-center dark:text-black">
          <h1
              class="font-bold md:text-7xl max-md:text-2xl  drop-shadow-[2px 2px 5px rgba(39, 108, 255, 0.7)]">
            Création de site web
          </h1>
          <p class="md:text-2xl max-md:text-md  drop-shadow-[2px 2px 5px rgba(39, 108, 255, 0.7)]">
            Site vitrine, évènementiel, e-commerce, site d'entreprise
          </p>
        </div>
        <div>
          <img alt="header" class="w-full" src="/src/assets/GoldFishWebHeader.webp">
          <div class="bubble bubble--1 max-lg:hidden"></div>
          <div class="bubble bubble--2 max-lg:hidden"></div>
          <div class="bubble bubble--3 max-lg:hidden"></div>
          <div class="bubble bubble--4 max-lg:hidden"></div>
          <div class="bubble bubble--5 max-lg:hidden"></div>
          <div class="bubble bubble--6 max-lg:hidden"></div>
          <div class="bubble bubble--7 max-lg:hidden"></div>
          <div class="bubble bubble--8 max-lg:hidden"></div>
          <div class="bubble bubble--9 max-lg:hidden"></div>
          <div class="bubble bubble--10 max-lg:hidden"></div>
          <div class="bubble bubble--11 max-lg:hidden"></div>
          <div class="bubble bubble--12 max-lg:hidden"></div>
        </div>
      </div>
    </main>
  </header>
</template>

