<template>
  <!--This is the page that is after the photographer home page, this page shows all the photographer we have(a list)-->
  <div class="photographer-list-page">
    <div class="main-container">
      <div class="design-hub-logo">
        <!--This router link when clicked, it will go back to the home page-->
        <router-link v-bind:to="'/projects/projects2018/behance-api/'"><img class="design-hub-logo--logo" src="../../images/logoWhite.png"></router-link>
      </div>
      <div class="photographer-list">
        <!--To check if the photographers data are back from the behance api and loop the datas that I got to get individual photographers datas-->
        <router-link v-if="checkPhotographersDatas" v-bind:to="toPhotographerProfileDetailPage + photographer.username" v-for="photographer in photographers">
          <div class="photographer-list-info">
            <div class="photographer-list-info--user-photo">
              <div class="user-photo">
                <img class="photographer-user-photo" v-bind:src="photographer.images[138]">
              </div>
            </div>
            <div class="photographer-list-info--user-info">
              <div class="user-name">
                <div class="user-name--firstname name">{{photographer.first_name}}</div>
                <div class="user-name--lastname name">{{photographer.last_name}}</div>
              </div>
              <div class="user-stats">
                <div class="user-stats--project-views">
                  <div class="project-views-icon">
                    <i class="project-views-icon--icon icons fas fa-eye"></i>
                    <!-- <img class="project-views-icon--icon icons fas fa-eye"> -->
                  </div>
                  <div class="project-views-title">Project Views</div>
                  <div class="project-views-stats stats">{{photographer.stats.views}}</div>
                </div>
                <div class="user-stats--appreciations">
                  <div class="appreciations-icon">
                    <img class="appreciations--icon icons fas fa-thumbs-up">
                  </div>
                  <div class="appreciations-title">Apprecidations</div>
                  <div class="appreciations-stats stats">{{photographer.stats.appreciations}}</div>
                </div>
                <div class="user-stats--followers">
                  <div class="followers-icon">
                    <img class="followers--icon icons" src="../../images/victor/Followers.png">
                  </div>
                  <div class="followers-title">Followers</div>
                  <div class="followers-stats stats">{{photographer.stats.followers}}</div>
                </div>
                <div class="user-stats--following">
                  <div class="following-icon">
                    <img class="following--icon icons" src="../../images/victor/Following.png">
                  </div>
                  <div class="following-title">Following</div>
                  <div class="following-stats stats">{{photographer.stats.following}}</div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "photographer-list-page",
  data() {
    return {
      toPhotographerProfileDetailPage:
        "/projects/projects2018/behance-api/photographer-profile-detail-page/",
      // All five photographers data are all in this array
      photographers: []
    };
  },
  methods: {
    // This is getting all the photographer's datas from the behance api, including all their stats
    getUserDatasFromBehance: function() {

      this.$http
        .jsonp(
          "https://api.behance.net/v2/users/almefer?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, push all the datas in to the "photographers" array
          this.photographers.push(response.body.user);
        });

      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/SkandaCreations?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, push all the datas in to the "photographers" array
          this.photographers.push(response.body.user);
        });

      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/sapolendario?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, push all the datas in to the "photographers" array
          this.photographers.push(response.body.user);
        });

      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/CCLORd389?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, push all the datas in to the "photographers" array
          this.photographers.push(response.body.user);
        });

      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/shivanetua?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, push all the datas in to the "photographers" array
          this.photographers.push(response.body.user);
        });
    }
  },
  computed: {
    // Checking if the data I got back from the api is 5 people(datas) or not
    checkPhotographersDatas: function() {
      var fivePhotographers = 5;
      return this.photographers.length === fivePhotographers;
    }
  },
  created: function() {
    // Calling the getting data from the api, start the function immediately when the page is loaded
    this.getUserDatasFromBehance();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #e5e5e5;
  font-family: "Open Sans", sans-serif;
}

a {
  width: 30%;
  margin: 0 40px 50px 0;
}

a:hover {
  text-decoration: none;
}

/*Web page background image*/

.photographer-list-page {
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

/*Logo styles starts here*/

.design-hub-logo {
  height: 40vh;
  width: 20%;
}

.design-hub-logo--logo {
  width: 22vw;
  display: block;
  padding: 20px 20px;
}

/*All the photograhers list block styles starts here*/

.photographer-list {
  display: flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
}

.photographer-list-info {
  background-color: #579068;
  width: 100%;
  height: 158px;
  display: flex;
  cursor: pointer;
  user-select: none;
}

.photographer-list-info--user-photo {
  width: 35%;
}

.user-photo {
  width: 100%;
  height: 150px;
}

.photographer-user-photo {
  width: 100%;
  height: 158px;
}

.photographer-list-info--user-info {
  width: 65%;
  background-color: #579068;
  height: 150px;
}

.user-name {
  width: 85%;
  border-bottom: 2px solid #63a476;
  padding: 8px 8px 2px 8px;
  margin: auto;
  font-size: 1.2vw;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
}

.user-name--firstname {
  margin-right: 12px;
  text-transform: capitalize;
}

.user-name--lastname {
  text-transform: capitalize;
}

/*All the photographer stats and also icons style starts here*/

.user-stats--project-views,
.user-stats--appreciations,
.user-stats--followers,
.user-stats--following {
  width: 100%;
  display: flex;
}

.user-stats--project-views {
  margin-top: 5px;
  margin-bottom: 2px;
}

.icons {
  width: 0.9vw;
  margin: 3px 10px 5px 23px;
}

.project-views-icon--icon {
  width: 1vw;
}

.appreciations--icon {
  width: 0.8vw;
}

.stats {
  display: flex;
  justify-content: flex-end;
}

.project-views-stats {
  width: 47%;
}

.appreciations-stats {
  width: 44%;
}

.followers-stats {
  width: 55%;
}

.following-stats {
  width: 55%;
}
</style>
