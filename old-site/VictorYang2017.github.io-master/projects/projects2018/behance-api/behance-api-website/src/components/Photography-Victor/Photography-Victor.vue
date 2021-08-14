<template>
  <!--THIS IS THE PHOTOGRAPHY HOME PAGE-->
  <div class="photography">
    <div class="main-container">
      <!-- Design hub logo -->
      <div class="design-hub-logo">
        <!--When clicked, this goes to the group home page-->
        <router-link v-bind:to="toHome"><img class="design-hub-logo--logo" src="../../images/logoWhite.png"></router-link>
      </div>
      <!-- Home page intros with button -->
      <div class="home-page-intro">
        <div class="home-page-intro--slogans">
          <h1>Great work! Great photographers!</h1>
        </div>
        <div class="home-page-intro--intro">
          <p class="first-intro">Looking for some inspiration or looking for some photographers to hire?</p>
          <p class="second-intro">if you are then you have come to the right place!</p>
          <p class="third-intro">We have a lot of great photographers who are currently working with us at the moment, they can take on any kind of impossible jobs!</p>
          <p class="focus-intro">We make impossible to possible!</p>
        </div>
        <!--This goes to the photographer list page when clicked-->
        <div class="home-page-button">
          <router-link v-bind:to="toPhotographerList">
            <div class="home-page-intro--btn">
              <h5>MEET THE PHOTOGRAPHERS</h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PhotographylistpageVictor from "./Photographer-list-page-Victor";
import PhotographerprofiledetailpageVictor from "./Photographer-profile-detail-page-Victor";
import PhotographerprojectdetailpageVictor from "./Photographer-project-detail-page-Victor";

export default {
  name: "photography",
  components: {
    PhotographylistpageVictor,
    PhotographerprofiledetailpageVictor,
    PhotographerprojectdetailpageVictor
  },
  data() {
    return {
      toHome: "/projects/projects2018/behance-api/",
      toPhotographerList: "/projects/projects2018/behance-api/photographer-list-page"
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #e5e5e5;
  user-select: none;
}

a:hover {
  text-decoration: none;
}

h1 {
  font-size: 4vw;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
}

h5 {
  font-size: 1.2vw;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: #8ccc9d;
}

p {
  font-size: 1.3vw;
  font-family: "Lato", sans-serif;
}



/*This is the PHOTOGRAPHY home page background image*/

.photography {
  width: 100%;
  height: 100vh;
  background: url("../../images/victor/photographyhomepageblur.jpg");
  background-size: cover;
}

.main-container {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}



/*This is where the logo styling starts*/

.design-hub-logo {
  height: 40vh;
  width: 20%;
}

.design-hub-logo--logo {
  width: 22vw;
  display: block;
  padding: 20px 20px;
}



/*This is where the PHOTPGRAPHER home page main contents styling starts*/

.home-page-intro {
  width: 100%;
  height: 60vh;
}

.home-page-intro--intro {
  width: 45%;
  margin: auto;
  line-height: 30px;
}

.second-intro {
  margin-bottom: 15px;
}

.focus-intro {
  margin-top: 3px;
  font-weight: bold;
}

.home-page-button {
  margin: 25px auto;
  width: 20%;
}

.home-page-intro--btn {
  border: 2px solid #8ccc9d;
  margin: 25px auto;
  padding: 20px;
  user-select: none;
  cursor: pointer;
}
</style>
