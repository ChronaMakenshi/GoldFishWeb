<script>
export default {
  data() {
    return {
      showPos: "10px", // Initialisation avec une valeur CSS valide
    };
  },
  mounted() {
    // Écouteur d'événement pour "scroll" avec passive: true
    window.addEventListener("scroll", this.handleScroll, { passive: true });

    // Écouteur d'événement pour "mouseover"
    window.addEventListener("mouseover", this.handleMouseOver);

    const interval = setInterval(() => {
      this.showPos = "-100px";
    }, 5000);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset && window.scrollY) {
        this.showPos = "10px";
      } else {
        this.showPos = "-100px";
      }
    },
    handleMouseOver(event) {
      if (window.innerWidth - event.clientX < 450) {
        this.showPos = "10px";
      }
    },
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
        @click.passive="scrollToTop"
        :style="{ right: showPos }"
    >
      <img alt="start" src="/src/assets/Neuneufleche.webp" />
    </div>
  </div>
</template>




