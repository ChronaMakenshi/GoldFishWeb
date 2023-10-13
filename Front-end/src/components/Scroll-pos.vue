<script>
export default {
  data() {
    return {
      showPos: "10px", // Initialisation avec une valeur CSS valide
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset && window.scrollY) {
        this.showPos = "10px";
      } else {
        this.showPos = "-100px";
      }
    });

    const interval = setInterval(() => {
      this.showPos = "-100px";
    }, 10000);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    },
  },

};
</script>

<template>
  <div>
    <div
        id="returnToHeader"
        class="fixed z-20 max-lg:hidden"
        @click="scrollToTop"
        :style="{ right: showPos }"
    >
      <img alt="start" src="src/assets/Neuneufleche.png" />
    </div>
  </div>
</template>

