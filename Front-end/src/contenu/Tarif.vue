<template>
  <article class="my-10">
    <div class="text-center m-5 md:text-3xl max-md:text-xl text-white">
      <h2 class="font-bold uppercase underline">Mes Tarifs</h2>
      <p>Un tarif adapté à votre site internet</p>
    </div>
    <div class="m-auto pt-4 w-[1001px] max-xl:w-3/4 max-md:w-11/12">
      <div class="text-black bg-blue-900 p-4 rounded-t-lg dark:bg-zinc-800 text-white">
        <p>Bienvenue à vous ! Vous avez une idée ou un projet en tête ? Je suis là pour vous aider. Contactez-moi
          dès maintenant pour obtenir une estimation gratuite.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1 bg-black rounded-2xl">
        <div class="bg-blue-700 p-5 text-white  dark:bg-zinc-100 dark:text-black">
          <h3 class="text-center underline underline-offset-2 decoration-double text-xl font-semibold uppercase">Site
            Vitrine Standard</h3>
          <p class="text-center my-3 text-lg">À partir de</p>
          <p class="text-center text-lg">Création d'un site 4 à 7<br> Tarif: 350 € /jour</p>
          <ul class="m-2 list-[upper-roman] p-6">
            <li>Développé sous WORDPRESS ou Développé SUR-MESURE (Codage à la main)</li>
            <li>Charte graphique à partir d'une maquette pré-définie</li>
            <li>Proposition de logo / Sélection d'une palette de couleur</li>
            <li>Domaine + hébergement + e-mail pendant 12 mois</li>
            <li>Interface administrateur STANDARD / Interface administrateur SUR-MESURE</li>
            <li>Site responsive (adapté à tous supports)</li>
            <li>Mise en place du contenu (textes & images)</li>
            <li>Formulaire de contact</li>
            <li>Liens de partage sur les réseaux sociaux</li>
            <li>Optimisation du référencement</li>
            <li>Statistiques de visite</li>
            <li>Mise en ligne du site</li>
          </ul>
          <Modal></Modal>
        </div>
        <div class="bg-blue-400 p-5 text-white dark:bg-zinc-800 dark:text-white">
          <h3 class="text-center underline underline-offset-2 decoration-double text-xl font-semibold uppercase">Site
            E-commerce</h3>
          <p class="text-center my-3 text-lg">À partir de</p>
          <p class="text-center text-lg"> Création d'un site 4 à 7<br> Tarif: 350 €/jour</p>
          <ul class="m-2 list-[upper-roman] p-6">
            <li>Développé sous WORDPRESS</li>
            <li>Charte graphique à partir d'une maquette pré-définie</li>
            <li>Proposition de logo / Sélection d'une palette de couleur</li>
            <li>Domaine + hébergement + e-mail pendant 12 mois</li>
            <li>Interface administrateur STANDARD / Interface administrateur SUR-MESURE</li>
            <li>Site responsive (adapté à tous supports)</li>
            <li>Mise en place du contenu (textes & images)</li>
            <li>Formulaire de contact</li>
            <li>Liens de partage sur les réseaux sociaux</li>
            <li>Optimisation du référencement</li>
            <li>Statistiques de visite</li>
            <li>Mise en ligne du site</li>
          </ul>
          <Modal></Modal>
        </div>
        <div class="bg-blue-700 p-5 text-white md:rounded-bl-lg dark:bg-zinc-100 dark:text-black">
          <h3 class="text-center underline underline-offset-2 decoration-double text-xl font-semibold uppercase">Forfait Maintenance</h3>
          <p class="text-center my-3 text-lg">50 € / Heure</p>
          <ul class="m-2 list-[upper-roman] p-6">
            <li>Mises à jour site internet & plugins</li>
            <li>Petites modifications graphiques ou de contenu</li>
            <li>Optimisation performances</li>
            <li>Restauration en cas de piratage</li>
          </ul>
          <div class="text-center">
            <a href="#Contact" class="bg-red-600 p-2 rounded-2xl text-white">Me Contacter</a>
          </div>
        </div>
        <div class="bg-blue-400  text-white p-5 md:rounded-br-lg max-md:rounded-b-lg dark:bg-zinc-800 dark:text-white">
          <h3 class="text-center underline underline-offset-2 decoration-double text-xl font-semibold uppercase">Développements spécifiques</h3>
          <p class="text-center my-3 text-lg">Taux journalier moyen</p>
          <p class="text-center text-lg p-6">350 € / jour</p>
          <div class="text-center">
            <a href="#Contact" class="bg-red-600 p-2 mt-3 rounded-2xl text-white">Me Contacter</a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import Modal from '/src/components/Modal.vue'
</script>
