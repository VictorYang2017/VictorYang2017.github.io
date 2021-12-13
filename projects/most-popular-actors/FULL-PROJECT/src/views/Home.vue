<template>
  <div class="home">
    <div class="desktop" v-if="!mobileWidth">
      <DesktopHome />
    </div>
    <div class="mobile" v-else>
      <MobileHome />
    </div>
  </div>
</template>

<script>
import DesktopHome from "./DesktopHome";
import MobileHome from "./MobileHome";
export default {
  name: "Home",
  components: {
    DesktopHome,
    MobileHome,
  },
  data() {
    return {
      mobileWidth: false,
    };
  },
  methods: {
    checkBrowserWidth() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1400) {
        if (!this.mobileWidth) {
          this.mobileWidth = true;
        } else {
          return;
        }
      } else {
        if (this.mobileWidth) {
          this.mobileWidth = false;
        } else {
          return;
        }
      }
    },
  },
  created() {},
  mounted() {
    window.addEventListener("resize", this.checkBrowserWidth);
    this.checkBrowserWidth();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkBrowserWidth);
  },
};
</script>
<style scoped>
/* .desktop{


  border: 2px solid red;
} */
</style>