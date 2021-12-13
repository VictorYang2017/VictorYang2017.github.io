<template>
  <div class="mobile-home">
    <div class="mobile-main-container">
      <div class="mobile-container">
        <div class="mobile-container-info mobile-delay-Show-info">
          <h3>
            Donec pellentesque commodo cursus. Suspendisse euismod urna arcu,
            vitae tincidunt sem feugiat aliquet. Morbi leo justo, lobortis nec
            magna et, iaculis ultrices sem. Quisque quam eros, pellentesque ut
            dignissim a, faucibus eu enim. Praesent at ullamcorper arcu. Cras
            fringilla porttitor ante, ut aliquet metus commodo sed.
          </h3>
        </div>
        <router-link to="/actorslist" class="mobile-delay-Show-btn"
          ><button>Top Actors Info</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { startGsapHomeAnimation } from "../util/GsapAnimation";
export default {
  name: "MobileHome",
  data() {
    return {
      mobileGsapTl: {},
    };
  },
  methods: {},
  mounted() {
    this.mobileGsapTl = startGsapHomeAnimation(
      "mobile-main-container",
      "mobile-delay-Show-info",
      "mobile-delay-Show-btn"
    );
  },
  beforeUnmount() {
    this.mobileGsapTl.kill();
    this.mobileGsapTl = {};
  },
};
</script>
<style scoped>
.mobile-home {
  display: flex;
  min-height: 100vh;
  font-size: 4rem;
  color: white;
}

.mobile-main-container {
  width: 100%;
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 1)
    ),
    url("../assets/images/landing-page.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.mobile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.mobile-container-info {
  margin: 0 2.5rem;
  /* border: 2px solid pink; */
}

.mobile-container-info h3 {
  font-size: 2rem;
  text-align: center;
}

.mobile-container button {
  margin-top: 2rem;
  padding: 1rem 4rem;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  border: 5px solid #fff;
  outline: none;
}

.mobile-delay-Show-info {
  opacity: 0;
}

.mobile-delay-Show-btn {
  display: none;
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .mobile-container-info h3 {
    font-size: 1.5rem;
  }

  .mobile-container button {
    font-size: 1.4rem;
    border: 4px solid #fff;
  }
}

@media only screen and (max-width: 350px) {
  .mobile-container-info h3 {
    font-size: 1.2rem;
  }

  .mobile-container button {
    font-size: 1rem;
    border: 3px solid #fff;
  }
}
</style>