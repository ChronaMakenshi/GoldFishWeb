<template>
  <article class="my-10">
    <div class="text-center m-5 min-[768px]:text-3xl text-white w-6/12 m-auto">
      <h1 class="font-bold uppercase underline mb-2">Contacter-Moi</h1>
      <p class="mb-5">
        Bienvenue à vous ! Vous avez une idée ou un projet en tête ? Nous sommes là pour vous aider. Contactez-nous dès
        maintenant pour obtenir une estimation gratuite.
      </p>
    </div>
    <div class="flex justify-center max-2xl:flex-col max-2xl:w-3/5 max-md:w-11/12 max-2xl:m-auto">
      <div
          class="p-5 max-md:p-0 max-2xl:rounded-t-lg max-2xl:text-center min-[1536px]:rounded-l-lg  bg-blue-400 dark:bg-zinc-800 text-white">
        <ul>
          <li class="m-2">
            <h4 class="text-blue-800 dark:text-blue-300">&#128222; Téléphone</h4>
            <p>06-11-53-31-80</p>
          </li>
          <li class="m-2">
            <h4 class="text-blue-800 dark:text-blue-300">📧 E-mail</h4>
            <p>christophe.mestdagh@goldfishweb.fr</p>
          </li>
          <li class="m-2">
            <h4 class="text-blue-800 dark:text-blue-300">⌚ Horaires</h4>
            <p>Lundi - Vendredi</p>
            <p>09H00 - 18H00</p>
          </li>
          <li class="m-2">
            <h4 class="text-blue-800 dark:text-blue-300">🪪 S.I.R.E.N</h4>
            <p>920276417</p>
          </li>
        </ul>
      </div>
      <div>
        <iframe
            allowfullscreen=""
            class="max-2xl:hidden"
            height="100%"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88946.51319206027!2d1.1903417776343526!3d45.83971952524877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f934afe6680461%3A0x10be4a3159364d11!2sLimoges!5e0!3m2!1sfr!2sfr!4v1696676341902!5m2!1sfr!2sfr"
            style="border: 0;"
            width="400"
        ></iframe>
      </div>
      <div
          class="p-5 max-md:p-2 bg-blue-400 max-2xl:flex max-2xl:rounded-b-lg max-2xl:justify-center min-[1536px]:rounded-r-lg dark:bg-zinc-800 text-white">
        <form @submit.prevent="submitForm" class="w-full max-w-lg">
          <div v-if="successMessage" id="alert-border-3"
               class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
               role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ml-3 text-sm font-medium">
              {{ successMessage }}
            </div>
            <button
                id="triggerElement"
                aria-label="Close"
                class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-border-3"
                type="button"
                @click="hideSuccessMessage"
            >
              <span class="sr-only">Dismiss</span>
              <svg aria-hidden="true" class="w-3 h-3" fill="none" viewBox="0 0 14 14"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>
              </button>
            </div>
          <input type="hidden" name="_csrf" v-model="csrfToken" />
          <!-- Le champ CSRF est ajouté ici -->
          <div class="flex flex-nowrap max-md:flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                  v-model="formData.firstname"
                  id="grid-first-name"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Votre prénom"
              />
              <!-- Affichez le message d'erreur spécifique au prénom -->
              <div v-if="errors.firstname" id="alert-border-2"
                   class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div class="ml-3 text-sm font-medium">
                  {{ errors.firstname }}
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                  v-model="formData.lastname"
                  id="grid-last-name"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Votre nom"
              />
              <!-- Affichez le message d'erreur spécifique -->
              <div v-if="errors.lastname" id="alert-border-2"
                   class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div class="ml-3 text-sm font-medium">
                  {{ errors.lastname }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <input
                  v-model="formData.email"
                  id="grid-mail"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="E-mail"
              />
              <!-- Affichez le message d'erreur spécifique à l'e-mail -->
              <div v-if="errors.email" id="alert-border-2"
                   class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div class="ml-3 text-sm font-medium">
                  {{ errors.email }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <textarea
                  v-model="formData.message"
                  id="grid-message"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Votre message"
              ></textarea>
              <!-- Affichez le message d'erreur spécifique au message -->
              <div v-if="errors.message" id="alert-border-2"
                   class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                   role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 w-4 h-4" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div class="ml-3 text-sm font-medium">
                  {{ errors.message }}
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mb-3">
            <div class="flex justify-center">
            <span
                class="inline-flex items-center appearance-none block bg-gray-300 text-gray-700 border border-gray-200 rounded-l-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              {{ formData.captchaOperation }} =
            </span>
              <input
                  id="captcha"
                  v-model="formData.captcha"
                  class="appearance-none block w-14 bg-gray-200 text-gray-700 border border-gray-200 rounded-r-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
              />
            </div>
            <!-- Affichez le message d'erreur spécifique au CAPTCHA -->
            <div v-if="errors.captcha" id="alert-border-2"
                 class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
              <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <div class="ml-3 text-sm font-medium">
                {{ errors.captcha }}
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <input v-model="formData.checked" class="mr-2 leading-tight" type="checkbox"/>
              <span class="text-sm">
                En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.
              </span>
              <div v-if="errors.checked" id="alert-border-2"
                   class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                   role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 w-4 h-4" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div class="ml-3 text-sm font-medium">
                  {{ errors.checked }}
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button
                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default {
  data() {
    return {
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        checked: false,
      },
      successMessage: "", // Message de succès (initialisé à vide)
      csrfToken: "",
      errors: {
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        checked: false,
        captcha: ""
      },
    };
  },
  created() {
    this.fetchCSRFToken();
    this.calculateAndSetCaptchaResult(); // Calculez le résultat et stockez-le dans les données
  },
  methods: {
    async fetchCSRFToken() {
      try {
        const response = await axios.get("http://localhost:3000/csrf");
        this.csrfToken = response.data.csrfToken;
      } catch (error) {
        console.error("Erreur lors de la récupération du jeton CSRF :", error);
      }
    },
    async submitForm() {
      this.errors = {}; // Réinitialisation des messages d'erreur

      if (!this.formData.firstname) {
        this.errors.firstname = "Le prénom est obligatoire.";
      } else if (this.formData.firstname.length < 5) {
        this.errors.firstname = "La chaîne est trop courte. Veuillez entrer au moins 5 caractères.";
      } else if (this.formData.firstname.length > 20) {
        this.errors.firstname = "La chaîne est trop longue. Limitez-la à 20 caractères maximum.";
      }

      if (!this.formData.lastname) {
        this.errors.lastname = "Le nom est obligatoire.";
      } else if (this.formData.lastname.length < 5) {
        this.errors.lastname = "La chaîne est trop courte. Veuillez entrer au moins 5 caractères.";
      } else if (this.formData.lastname.length > 20) {
        this.errors.lastname = "La chaîne est trop longue. Limitez-la à 20 caractères maximum.";
      }

      if (!this.formData.email) {
        this.errors.email = "L'e-mail est obligatoire.";
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = "Veuillez saisir une adresse e-mail valide.";
      }

      if (!this.formData.message) {
        this.errors.message = "Le message est obligatoire.";
      } else if (this.formData.message.length < 50) {
        this.errors.message = "La chaîne est trop courte. Veuillez entrer au moins 50 caractères.";
      } else if (this.formData.message.length > 255) {
        this.errors.message = "La chaîne est trop longue. Limitez-la à 255 caractères maximum.";
      }

      if (Number(this.formData.captcha) !== this.formData.expectedCaptchaResult) {
        this.errors.captcha = "La réponse au CAPTCHA est incorrecte.";
      }

      if (!this.formData.checked) {
        this.errors.checked = "Vous devez accepter les conditions pour soumettre le formulaire.";
      }

      if (Object.values(this.errors).some(error => error !== "")) {
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/api", {
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
          firstname: "",
          lastname: "",
          email: "",
          message: "",
          checked: false,
        };

        // Réinitialisez le CAPTCHA
        this.generateCaptchaOperation();

      } catch (error) {
        console.error("Erreur lors de la requête à l'API :", error);
        this.successMessage = "Erreur lors de la requête à l'API : " + error.message;
      }
    },

    generateCaptchaOperation() {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operation = "+";
      this.formData.captchaOperation = `${num1} ${operation} ${num2}`;
    },

    checkCaptcha() {
      const [num1, operator, num2] = this.formData.captcha.split(" ");
      const expectedCaptcha = this.calculateCaptchaResult(num1, operator, num2);
      return Number(this.formData.captcha) === expectedCaptcha;
    },

    calculateAndSetCaptchaResult() {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operator = "+";
      const expectedResult = num1 + num2;

      this.formData.captchaOperation = `${num1} ${operator} ${num2}`;
      this.formData.expectedCaptchaResult = expectedResult;
    },

    hideSuccessMessage() {
      const targetElement = document.querySelector("#alert-border-3");
      if (targetElement) {
        targetElement.classList.add('hidden');
      }
    },
  },
};
</script>