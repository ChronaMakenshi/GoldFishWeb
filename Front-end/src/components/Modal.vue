<template>
  <div>
    <div class="text-center">
    <!-- Modal toggle -->
    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
            class="bg-red-600 p-2 rounded-2xl text-white" type="button">
      Demander un Devis
    </button>
    </div>
    <!-- Main modal -->
    <div ref="modalEl" id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white underline text-center uppercase">Demande de devis</h3>
            <div v-if="successMessage" id="alert-border-3"
                 class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
              <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <div  class="ml-3 text-sm font-medium">
                {{ successMessage }}
              </div>
              <button
                  id="triggerElement"
                  type="button"
                  class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-border-3"
                  aria-label="Close"
                  @click="hideSuccessMessage"
              >
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
              </button>
            </div>
            <div class="bg-blue-500 rounded p-2 text-center dark:text-white mb-2">
              <p>
                Demande de devis gratuit . Reponse moyenne 48h. Merci de détailler au maximun votre projet pour un
                reponse présive.
              </p>
            </div>
            <form class="space-y-6" @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="nom" class="block text-gray-800 underline dark:text-white">Nom/Prénom *</label>
                <input type="text" id="nom" name="nom" v-model="formData.nom"
                       class="w-full text-gray-800 border-gray-300 rounded-lg shadow-sm">
                <div  v-if="errors.nom"
                      class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">{{ errors.nom }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-gray-800 underline dark:text-white">Type d'entité *</label>
                <input type="radio" id="particulier" name="type_entite" value="particulier" v-model="formData.type_entite">
                <label for="particulier" class="mr-4 px-1 text-gray-800 dark:text-white">Particulier</label>
                <input type="radio" id="association" name="type_entite" value="association" v-model="formData.type_entite">
                <label for="association" class="mr-4 px-1 text-gray-800 dark:text-white">Association</label>
                <input type="radio" id="societe" name="type_entite" value="societe" v-model="formData.type_entite">
                <label for="societe" class="text-gray-800 px-1 dark:text-white">Société</label>
                <span class="text-red-500" v-if="errors.type_entite">{{ errors.type_entite }}</span>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-800 underline dark:text-white">Email *</label>
                <input type="email" id="email" name="email" v-model="formData.email" class="w-full text-black border-gray-300 rounded-lg shadow-sm">
                <div  v-if="errors.email"
                      class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">{{ errors.email }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label for="tel" class="block text-gray-800 underline dark:text-white">Téléphone *</label>
                <input type="tel" id="tel" name="tel" v-model="formData.tel" class="w-full text-black border-gray-300 rounded-lg shadow-sm">
                <div  v-if="errors.tel"
                      class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">{{ errors.tel }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label for="adresse_site" class="block underline text-gray-800 dark:text-white">Adresse du site internet</label>
                <input type="text" id="adresse_site" name="adresse_site" v-model="formData.adresse_site" class="w-full text-black border-gray-300 rounded-lg shadow-sm">
                <span class="text-red-500" v-if="errors.adresse_site">{{ errors.adresse_site }}</span>
              </div>
              <div class="mb-4">
                <input type="checkbox" id="accepter" name="accepter" v-model="formData.accepter">
                <label for="accepter" class="ml-2 text-gray-800 dark:text-white">En soumettant ce formulaire,
                  j'accepte que les informations saisies soient exploitées dans le cadre de la demande de devis et de
                  la relation commerciale qui peut en découler. *</label>
                <div  v-if="errors.accepter"
                      class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">{{ errors.accepter }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label for="projet" class="block text-gray-800 underline dark:text-white">Message pour votre projet *</label>
                <textarea id="projet" name="projet" v-model="formData.projet" rows="4" class="w-full text-black border-gray-300 rounded-lg shadow-sm"></textarea>
                <div  v-if="errors.projet"
                      class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div>
                    <span class="font-medium">{{ errors.projet }}</span>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg py-2.5 px-5">Envoyer votre demande de devis</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Modal } from 'flowbite';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{10}$/; // Exemple : 0612345678

export default {
  data() {
    return {
      formData: {
        nom: '',
        type_entite: 'particulier',
        email: '',
        tel: '',
        adresse_site: '',
        accepter: false,
        projet: '',
      },
      successMessage: "",
      errors: {},
    };
  },
  created() {
    this.fetchCSRFToken();
    this.modal = new Modal(this.$refs.modalEl, options);
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    async fetchCSRFToken() {
      try {
        const response = await axios.get("http://localhost:3000/csrf");
        this.csrfToken = response.data.csrfToken;
      } catch (error) {
        console.error("Erreur lors de la récupération du jeton CSRF :", error);
      }
    },
    async submitForm() {
      this.errors = {};

      if (!this.formData.nom) {
        this.errors.nom = "Le prénom est obligatoire.";
      } else if (this.formData.nom.length < 5) {
        this.errors.nom = "La chaîne est trop courte. Veuillez entrer au moins 5 caractères.";
      } else if (this.formData.nom.length > 20) {
        this.errors.nom = "La chaîne est trop longue. Limitez-la à 20 caractères maximum.";
      }

      if (!this.formData.type_entite) {
        this.errors.type_entite = "Le type d'entité est obligatoire.";
      }

      if (!this.formData.email) {
        this.errors.email = "L'e-mail est obligatoire.";
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = "Veuillez saisir une adresse e-mail valide.";
        return; // Empêchez la soumission du formulaire si l'e-mail n'est pas valide.
      }

      if (!this.formData.tel) {
        this.errors.tel = "Le téléphone est obligatoire.";
      } else if (!phoneRegex.test(this.formData.tel)) {
        this.errors.tel = "Veuillez saisir un numéro de téléphone valide (10 chiffres sans espaces ni caractères spéciaux).";
      }


      if (!this.formData.projet) {
        this.errors.projet = "Le message est obligatoire.";
      }

      if (!this.formData.projet) {
        this.errors.projet = "Le prénom est obligatoire.";
      } else if (this.formData.projet.length < 100) {
        this.errors.projet = "La chaîne est trop courte. Veuillez entrer au moins 100 caractères.";
      } else if (this.formData.projet.length > 500) {
        this.errors.projet = "La chaîne est trop longue. Limitez-la à 500 caractères maximum.";
      }

      if (!this.formData.accepter) {
        this.errors.accepter = "Vous devez accepter les conditions pour soumettre le formulaire.";
      }

      if (Object.values(this.errors).some(error => error !== "")) {
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/devis", {
          ...this.formData,
          _csrf: this.csrfToken,
        }, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        });

        this.successMessage = "Votre formulaire a été soumis avec succès !";
        console.log("Réponse de l'API :", response.data);

        this.formData = {
          nom: '',
          type_entite: 'particulier',
          email: '',
          tel: '',
          adresse_site: '',
          accepter: false,
          projet: '',
        };
      } catch (error) {
        console.error("Erreur lors de la requête à l'API :", error);
        this.successMessage = "Erreur lors de la requête à l'API : " + error.message;
      }

      this.hideModal();
    },
    hideSuccessMessage() {
      // Masquez l'alerte de succès lorsque l'utilisateur clique sur le bouton de fermeture
      const targetElement = document.querySelector("#alert-border-3");
      if (targetElement) {
        targetElement.classList.add('hidden');
      }
    },
  },
};

const options = {
  placement: 'bottom-right',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  closable: true,
  onHide: () => {
    console.log('modal est caché');
  },
  onShow: () => {
    console.log('modal est affiché');
  },
  onToggle: () => {
    console.log('modal a été basculé');
  },
};

</script>
