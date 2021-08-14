<template>
  <!--This is the page after the photographer detail page, after clicked any of the photographer project, you will come to this page-->
  <div class="photographer-project-detail-page">
    <div class="main-container" v-if="checkingProjectDetailsAreBack">
      <div class="top-nav">
        <div class="top-nav--back-button">
          <router-link v-bind:to="toPhotographerProfileDetailPage + '/' + photographerIdUserName"><img class="back-button fas fa-chevron-circle-left fa-5x"></router-link>
        </div>
      </div>
      <div class="user-details">
        <div class="user-details--intro user-details--block">
          <div class="top-intro">
            <div class="user-name-company">
              <h4>{{photographerDetails.first_name}} {{photographerDetails.last_name}}</h4>
            </div>
            <div class="user-profile-image">
              <img v-bind:src="photographerDetails.images[276]">
            </div>
            <div class="user-company">
              <p>Photographer,</p>
              <p>Design hub</p>
            </div>

          </div>
        </div>
        <div class="user-details--project-details user-details--block">
          <div class="project-details">
            <div class="project-name">{{photographerProjectDetails.name}}</div>
            <div class="project-focus">
              <span v-for="currentPhotographerFields in photographerProjectDetails.fields">{{currentPhotographerFields}}, </span>
            </div>
            <div class="project-published-date">Published: {{photographerProjectDetails.published_on | gettingPublishDate }}</div>
            <div class="project-view-project-appreciations">
              <div class="project-view">
                <div class="project-view-icons">
                  <img class="project-views-icon--icon icons icons fas fa-eye fa-lg">
                </div>
                <div class="project-view-results results">{{photographerProjectDetails.stats.views}}</div>
              </div>
              <div class="project-appreciations">
                <div class="project-appreciations-icons">
                  <img class="appreciations--icon icons fas fa-thumbs-up fa-lg">
                </div>
                <div class="project-appreciations-results results">{{photographerProjectDetails.stats.appreciations}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-details--comments user-details--block">
          <div class="comments-block">
            <div class="comments-heading">Comments</div>
            <div class="comments-scroll-down" v-if="currentProjectComments.length > 3">(Scroll down to see more comments)</div>
            <div class="comments-body" v-for="individualComment in currentProjectComments">
              <div class="comments-body--user-name">
                <div class="comments-name">{{individualComment.user.display_name}} - </div>
                <div class="comments-date">{{individualComment.created_on | gettingCommentDate}} </div>
              </div>
              <div class="comments-body--user-comments">{{individualComment.comment}}</div>
            </div>
          </div>
        </div>
        <div class="user-details-enternal-links user-details--block">
          <div class="social-media-links" v-if="gettingTheUserSocialMedias">
            <div class="social-media-links--links" v-for="individualSocialMediaLinks in currentPhotographerSocailMediaLinks">
              <a v-bind:href="individualSocialMediaLinks.url"><img class="social-links" v-bind:src="require('../../images/victor/' + individualSocialMediaLinks.service_name + '.png')"></a>
            </div>
          </div>
          <div class="link-to-user-behance">
            <a v-bind:href="photographerDetails.url">
              <h5>Link to my Behance!</h5>
            </a>
          </div>
        </div>
      </div>
      <div class="user-projects" v-if="gettingImageThatHasSrc">
        <div class="user-projects-main-container">
          <div class="user-projects--projects" v-for="individualProjectImages in filteredProjectImages">
            <img class="user-projects--projects-image" v-bind:src="individualProjectImages.src">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// This is a javascript plugin, moment.js "https://momentjs.com/", importing moment.js into this components
import moment from 'moment'
export default {
  name: "photographer-project-detail-page",
  // This is receiving two datas from the previous page, which is from "photographer profile detail page"
  props: ["individualPhotographerUserId", "individualPhotographerProject"],
  data() {
    return {
      toPhotographerProfileDetailPage: "/projects/projects2018/behance-api/photographer-profile-detail-page",
      individualPhotographerProjectId: "",
      // Specific photographers project details datas is in this object
      photographerProjectDetails: {},
      photographerIdUserName: "",
      // Specific photographers details datas is in this object
      photographerDetails: {},
      // Specific photographer's social medias data are in here(after filtering, only facebook, twitter and instagram social medias)
      currentPhotographerSocailMediaLinks: [],
      // A specific project's user comments are all in this object
      currentProjectComments: {},
      // Some project images has src properties, some don't, this array only has the project images with src property in it
      filteredProjectImages: []
    };
  },

  methods: {
    // This function is getting all the api data's that I need on this page(user details, user projects details and project user comments)
    gettingSpecificProjectAndUser: function() {
      // User project details
      this.$http
        .jsonp(
        "https://www.behance.net/v2/projects/" +
        this.individualPhotographerProjectId +
        "?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, put the data into the "photographerProjectDetails" object
          this.photographerProjectDetails = response.body.project;
        });
      // User details
      this.$http
        .jsonp(
        "https://api.behance.net/v2/users/" + this.photographerIdUserName + "?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, put the data into the "photographerDetails" object
          this.photographerDetails = response.body.user;
        });
      // Project user comments
      this.$http
        .jsonp(
        "https://api.behance.net/v2/projects/" + this.individualPhotographerProjectId + "/comments?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
        )
        .then(response => {
          // After getting all the datas from the behance api, put the data into the "currentProjectComments" object
          this.currentProjectComments = response.body.comments;
        });
    }
  },
  filters: {
    // Both function is changing time stamp to human readable dates, first one is going to get the time stamp and show the data "March 15, 2018" and the secon one is going to show the data "8 hour ago"
    gettingPublishDate: function(value) {
      if (value) {
        // Show data like this (March 15, 2018)
        return moment.unix(value).format("LL");
      }
    },
    gettingCommentDate: function(value) {
      if (value) {
        // Show data like this (8 hour ago)
        return moment.unix(value).fromNow();
      }
    }
  },
  computed: {
    // Check to see if "photographerProjectDetails" object has data in it 
    checkingProjectDetailsAreBack: function() {
      return this.photographerProjectDetails.id;
    },
    // This is filtering the photographer's social medias links, make sure only facebook, twitter and instagram are pushed in to the "currentPhotographerSocailMediaLinks" array
    gettingTheUserSocialMedias: function() {
      var allUserSocialMedias = this.photographerDetails.social_links;
      var facebookSocialMedia = "Facebook";
      var twitterSocialMedia = "Twitter";
      var instagramSocialMedia = "Instagram";
      for (var i = 0; i < allUserSocialMedias.length; i++) {
        var eachSocialMedias = allUserSocialMedias[i];
        if (eachSocialMedias.service_name === twitterSocialMedia || eachSocialMedias.service_name === facebookSocialMedia || eachSocialMedias.service_name === instagramSocialMedia) {
          this.currentPhotographerSocailMediaLinks.push(eachSocialMedias);
        }
      }
      return this.currentPhotographerSocailMediaLinks;
    },
    // Some project images has src properties, some don't, this function is doing the filtering, only push the image with src property in the object
    gettingImageThatHasSrc: function() {
      var allProjectImage = this.photographerProjectDetails.modules;
      var filteringProjectImages = [];
      for (var i = 0; i < allProjectImage.length; i++) {
        if (allProjectImage[i].src) {
          filteringProjectImages.push(allProjectImage[i]);
        }
      }
      this.filteredProjectImages = filteringProjectImages;
      return this.filteredProjectImages;
    }
  },
  created: function() {
    // After receiving the project id from the previous page, put it in to the "individualPhotographerProjectId" property
    this.individualPhotographerProjectId = this.individualPhotographerProject;
    // After receiving the photographer user id from the previous page, put it in to the "photographerIdUserName" property
    this.photographerIdUserName = this.individualPhotographerUserId;
    // Imediately run this function to get data from the behance api when this page is loaded
    this.gettingSpecificProjectAndUser();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  color: #e5e5e5;
  user-select: none;
  font-family: "Open Sans", sans-serif;
}

.link-to-user-behance a {
  text-decoration: none!important;
}

h4 {
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 15px;
}

p {
  font-size: 0.9vw;
  font-weight: 600;
}

.photographer-profile-detail-page {
  width: 100%;
}

.main-container {
  width: 100%;
}





/*Top nav and the back button styles starts here*/

.top-nav {
  background-color: #4c4c4d;
  width: 100%;
  height: 80px;
  border: 2px solid #3d3d3f;
  border-left: none;
  border-right: none;
  border-top: none;
}

.top-nav--back-button {
  width: 5%;
}

.back-button {
  width: 3vw;
  display: flex;
  margin: 0 0 0 20px;
  padding-top: 10px;
  cursor: pointer;
}

.fa-chevron-circle-left {
  color: #579068;
}





/*Styles of the top section where the photographer details and project details are starts here*/

.user-details {
  width: 100%;
  height: 300px;
  background-color: #4c4c4d;
  display: flex;
  border-bottom: 2px solid #3d3d3f;
}

.user-details--block {
  width: 25%;
  border: 1px solid #3d3d3f;
}

.top-intro {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}





/*First block*/

.user-profile-image {
  margin: 15px 0;
}

.user-profile-image img {
  width: 138px;
  height: 138px;
}

.user-name-company {
  display: flex;
}





/*Second block*/

.project-details {
  width: 80%;
  height: 100%;
  text-align: left;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-name {
  font-size: 1.5vw;
  font-weight: bold;
}

.project-focus {
  font-size: 0.8vw;
  font-weight: bold;
  margin: 20px 0;
}

.project-published-date {
  font-size: 0.7vw;
  font-weight: bold;
}

.project-view-project-appreciations {
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 30px;
}

.icons {
  width: 1.7vw;
  margin-right: 20px;
}

.project-view {
  display: flex;
  margin-right: 100px;
}

.project-appreciations {
  display: flex;
  align-items: center;
}

.results {
  font-size: 0.9vw;
  font-weight: bold;
}






/*Third block*/

.user-details--comments {
  text-align: left;
  overflow: auto;
}

.comments-block {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 54px auto;
}

.comments-heading {
  font-weight: bold;
  font-size: 1.5vw;
}

.comments-scroll-down {
  margin-bottom: 20px;
}

.comments-body--user-name {
  font-size: 0.9vw;
  margin-bottom: 5px;
  display: flex;
}

.comments-body--user-comments {
  margin-bottom: 20px;
}

.comments-name {
  font-weight: bold;
  text-transform: capitalize;
  padding-right: 2px;
}





/*Fourth block*/

.social-media-links {
  width: 100%;
  height: 70%;
}

.link-to-user-behance {
  background-color: #579068;
  border: 2px solid #63a476;
  height: 31%;
}

.social-links {
  width: 4.5vw;
}

.social-media-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.link-to-user-behance h5 {
  font-size: 1.5vw;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  user-select: none;
  cursor: pointer;
}





/*This is where the project(image) style starts*/

.user-projects {
  width: 100%;
}

.user-projects-main-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.user-projects--projects {
  width: 45%;
  margin: 50px auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
