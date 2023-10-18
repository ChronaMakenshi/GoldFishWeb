<script setup>
import Header from './contenu/Header.vue'
import Service from './contenu/Service.vue'
import Competence from './contenu/Competence.vue'
import Tarif from './contenu/Tarif.vue'
import Apropos from './contenu/Apropos.vue'
import Contact from './contenu/Contact.vue'
import Footer from './contenu/Footer.vue'
</script>

<template>
  <div class="bg-blue-500 dark:bg-slate-900 max-md:text-sm">
    <Header id="Home"></Header>
    <Service id="Service"></Service>
    <Competence id="Competence"></Competence>
    <Tarif id="Tarif"></Tarif>
    <Apropos id="Apropos"></Apropos>
    <Contact id="Contact"></Contact>
    <Footer></Footer>
  </div>
</template>


