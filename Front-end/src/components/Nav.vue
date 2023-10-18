<script setup>
 import ModeDark from "./ModeDark.vue";
 import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
 import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
 import { ref, onMounted } from 'vue';

 const navigation = [
   { name: '🦈', href: '#Home', current: true },
   { name: 'SERVICES', href: '#Service', current: false },
   { name: 'COMPÉTENCES', href: '#Competence', current: false },
   { name: 'TARIFS', href: '#Tarif', current: false },
   { name: 'À PROPOS', href: '#Apropos', current: false },
   { name: 'CONTACT', href: '#Contact', current: false },
 ]

 const showPos = ref("0");

 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: "auto",
   });
 };

 onMounted(async () => {
   window.addEventListener("scroll", () => {
     showPos.value = "0";
   }, { passive: true }); // Ajoutez { passive: true } ici pour optimiser la performance.

   const interval = setInterval(async () => {
     if (window.scrollY) {
       showPos.value = "-80px";
     } else {
       showPos.value = "0";
     }
   }, 2000);
 });
</script>

<template>
  <div class="min-h-full relative" id="returnToNav" :style="{ top: showPos }">
    <Disclosure class=" w-full fixed max-md:relative z-20 bg-blue-600/50 dark:bg-slate-900/50" as="nav"  v-slot="{ open }">
      <div class="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8" >
        <div class="flex h-20 items-center justify-between">
          <div class="flex items-center justify-between">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <img class="h-8 w-8 mr-4"
                   src="/src/assets/goldfishfish.svg" alt="Your Company" />
              <span class="font-semibold text-xl tracking-tight">GoldFishWeb</span>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                 :class="['text-gray-300 hover:bg-gray-700 hover:text-white font-semibold',
                 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
          <div class="mx-2 flex item-center">
            <ModeDark></ModeDark>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel class="md:hidden">
        <div class="text-center space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                            :class="['text-gray-300 hover:bg-gray-700 hover:text-white max-md:text-white max-md:bg-gray-700',
                            'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>