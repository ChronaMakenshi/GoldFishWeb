<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        checked: false,
      },
      csrfToken: '', // Ajoutez cette ligne pour le champ CSRF
    };
  },
  created() {
    this.fetchCSRFToken();
  },
  methods: {
    async fetchCSRFToken() {
      try {
        const response = await axios.get('http://localhost:3000/csrf');
        this.csrfToken = response.data.csrfToken; // Stockez le jeton CSRF dans votre composant
      } catch (error) {
        console.error('Erreur lors de la récupération du jeton CSRF :', error);
      }
    },
    submitForm() {
      axios
          .post("http://localhost:3000/api", {
            ...this.formData,
            _csrf: this.csrfToken, // Inclure le jeton CSRF dans le corps de la requête
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Réponse de l'API :", response.data);
            // Réinitialisez le formulaire ici si nécessaire
            this.formData = {
              firstname: '',
              lastname: '',
              email: '',
              message: '',
              checked: false,
            };
          })
          .catch((error) => {
            console.error("Erreur lors de la requête à l'API :", error);
          });
    },
  },
};
</script>

<template>
  <article class="my-10">
    <div class="text-center m-5 text-3xl text-white w-6/12 m-auto mb-5 max-md:text-xl">
      <h1 class="font-bold uppercase underline mb-2">Contacter-Moi</h1>
      <p>Bienvenue à vous ! Vous avez une idée ou un projet en tête ? Nous sommes là pour vous aider. Contactez-nous dès
        maintenant pour obtenir une estimation gratuite.</p>
    </div>
    <div class="flex justify-center max-2xl:flex-col max-2xl:w-3/5 max-md:w-11/12 max-2xl:m-auto">
      <div class="p-5 max-md:p-0 bg-blue-400 rounded-l-lg dark:bg-zinc-800 text-white">
        <ul>
          <li class="m-2">
            <h4 class="text-blue-800">&#128222; Téléphone</h4>
            <p>06-11-53-31-80</p>
          </li>
          <li class="m-2">
            <h4 class="text-blue-800">📧 E-mail</h4>
            <p>christophe.mestdagh@goldfishweb.fr</p>
          </li>
          <li class="m-2">
            <h4 class="text-blue-800">⌚ Horaires</h4>
            <p>Lundi - Vendredi</p>
            <p>09H00 - 18H00</p>
          </li>
          <li class="m-2">
            <h4 class="text-blue-800">🪪 S.I.R.E.N</h4>
            <p>920276417</p>
          </li>
        </ul>
      </div>
      <div>
        <iframe
            allowfullscreen=""
            class="max-2xl:hidden"
            height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88946.51319206027!2d1.1903417776343526!3d45.83971952524877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f934afe6680461%3A0x10be4a3159364d11!2sLimoges!5e0!3m2!1sfr!2sfr!4v1696676341902!5m2!1sfr!2sfr"
            style="border:0;"
            width="500"></iframe>
      </div>
      <div class="p-5 max-md:p-2 bg-blue-400 rounded-r-lg dark:bg-zinc-800 text-white">
        <form @submit="submitForm" class="w-full max-w-lg">
          <input type="hidden" name="_csrf" v-model="csrfToken">
          <!-- Le champ CSRF est ajouté ici -->
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input v-model="formData.firstname"
                  id="grid-first-name"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Jane" type="text">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input v-model="formData.lastname"
                  id="grid-last-name"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Doe" type="text">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <input v-model="formData.email"
                  id="grid-mail"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="E-mail" type="email">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <textarea v-model="formData.message"
                  id="grid-message"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Votre message" type="text"></textarea>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <input v-model="formData.checked" class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
              En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.
            </span>
            </div>
          </div>
          <div class="text-center">
            <button
                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>