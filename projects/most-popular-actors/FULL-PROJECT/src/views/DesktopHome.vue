<template>
  <div class="desktop-home">
    <div class="left-main-container">
      <div class="left-container">
        <div class="left-container-info desktop-delay-show-info">
          <div class="left-container-info-image">
            <img src="../assets/images/home-desktop-images-min.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="right-main-container">
      <div class="right-container">
        <div class="right-container-info">
          <div class="right-container-info-intro">
            <h3>
              Donec pellentesque commodo cursus. Suspendisse euismod urna arcu,
              vitae tincidunt sem feugiat aliquet. Morbi leo justo, lobortis nec
              magna et, iaculis ultrices sem. Quisque quam eros, pellentesque ut
              dignissim a, faucibus eu enim. Praesent at ullamcorper arcu. Cras
              fringilla porttitor ante, ut aliquet metus commodo sed.
            </h3>
          </div>
          <div class="right-container-info-btn">
            <router-link to="/actorslist" class="desktop-delay-show-btn"
              ><button>Top Actors Info</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { startGsapHomeAnimation } from "../util/GsapAnimation";
export default {
  name: "DesktopHome",
  data() {
    return {
      desktopGsapTl: {},
    };
  },
  mounted() {
    this.desktopGsapTl = startGsapHomeAnimation(
      "left-main-container",
      "desktop-delay-show-info",
      "desktop-delay-show-btn"
    );
  },
  beforeUnmount() {
    this.desktopGsapTl.kill();
    this.desktopGsapTl = {};
  },
};
</script>

<style scoped>
.desktop-home {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  /* border: 2px solid blue; */
}

.left-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
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

  transform: translateX(-100%);

  /* border: 2px solid purple; */
}

.left-container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.left-container-info {
  /* display: none; */
  justify-content: center;
  align-items: center;
  height: 100%;
  /* border: 2px solid green; */
}

.left-container-info-image {
  /* border: 2px solid pink; */
}

.left-container-info-image img {
  width: 100%;
}

.right-main-container {
  width: 25%;
  border: 10px solid #191919;
}

.right-container {
  height: 100%;
  /* border: 2px solid green; */
}

.right-container-info {
  padding: 2rem 2rem 0 2rem;
}

.right-container-info-intro h3 {
  text-align: center;
  font-size: 1.5vw;
  font-weight: normal;
}

.right-container-info-btn {
  margin-top: 2rem;
}

.right-container-info-btn button {
  padding: 0.8rem 0;
  width: 100%;
  background-color: transparent;
  font-size: 1.8vw;
  font-weight: bold;
  color: #fff;
  border: 5px solid #fff;
  outline: none;
}

.desktop-delay-show-info {
  display: none;
  opacity: 0;
}

.desktop-delay-show-btn {
  display: none;
  opacity: 0;
}

@media only screen and (min-width: 1925px) {
  .right-main-container {
    border: 15px solid #191919;
  }

  .right-container-info-btn button {
    border: 7px solid #fff;
  }
}

@media only screen and (min-width: 2565px) {
  .right-main-container {
    border: 20px solid #191919;
  }

  .right-container-info {
    padding: 4rem;
  }

  .right-container-info-btn {
    margin-top: 4rem;
  }

  .right-container-info-btn button {
    padding: 1.4rem 0;
    border: 10px solid #fff;
  }
}

@media only screen and (min-width: 3845px) {
  .desktop-home {
    display: none;
  }
}
</style>