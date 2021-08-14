<template>
    <!--This is the page that is after the photographer list page, this page shows a specific photographer's details and their project covers-->
    <div class="photographer-profile-detail-page">
        <!--Check if the "currentPhotographerDatasAndProjects" has all the required datas, if yes show the elements-->
        <div class="main-container" v-if="checkCurrentPhotographerDatasAndProjects">
            <div class="top-nav">
                <div class="top-nav--back-button">
                    <!--This router link goes back to the photographer list page when clicked-->
                    <router-link v-bind:to="toPhotographerList"><img class="back-button fas fa-chevron-circle-left fa-5x"></router-link>
                </div>
            </div>
            <div class="user-details">
                <div class="user-details--intro user-details--block">
                    <div class="top-intro">
                        <div class="user-profile-image">
                            <img class="user-image" v-bind:src="currentPhotographerDatasAndProjects.userDatas.images[138]">
                        </div>
                        <div class="user-name-company">
                            <h4>{{currentPhotographerDatasAndProjects.userDatas.first_name}} {{currentPhotographerDatasAndProjects.userDatas.last_name}}</h4>
                            <p>{{currentPhotographerDatasAndProjects.userDatas.occupation}},</p>
                            <p>Design hub</p>
                        </div>
                    </div>
                    <div class="bottom-intro">
                        <div class="user-website">
                            <a v-bind:href="currentPhotographerDatasAndProjects.userDatas.website">{{currentPhotographerDatasAndProjects.userDatas.website}}</a>
                        </div>
                        <!--Loop through the specific photographers specialty field and display them-->
                        <span class="user-focus" v-for="currentPhotographerFields in currentPhotographerDatasAndProjects.userDatas.fields">{{currentPhotographerFields}},</span>
                    </div>
                </div>
                <div class="user-details--about-me user-details--block">
                    <div class="about-me-title">About me</div>
                    <div class="about-me-paragraph">{{currentPhotographerDatasAndProjects.userDatas.sections["About Me"]}}</div>
                </div>
                <div class="user-details--stats user-details--block">
                    <div class="user-stats--project-views user-stats">
                        <div class="project-views-icon">
                            <img class="project-views-icon--icon icons fas fa-eye fa-lg">

                        </div>
                        <div class="project-views-title titles">Project Views</div>
                        <div class="project-views-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.views}}</div>
                    </div>
                    <div class="user-stats--appreciations user-stats">
                        <div class="appreciations-icon">
                            <img class="appreciations--icon icons fas fa-thumbs-up fa-lg">
                        </div>
                        <div class="appreciations-title titles">Appreciations</div>
                        <div class="appreciations-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.appreciations}}</div>
                    </div>
                    <div class="user-stats--followers user-stats">
                        <div class="followers-icon">
                            <img class="followers--icon icons" src="../../images/victor/Followers.png">
                        </div>
                        <div class="followers-title titles">Followers</div>
                        <div class="followers-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.followers}}</div>
                    </div>
                    <div class="user-stats--following user-stats">
                        <div class="following-icon">
                            <img class="following--icon icons" src="../../images/victor/Following.png">
                        </div>
                        <div class="following-title titles">Following</div>
                        <div class="following-stats stats">{{currentPhotographerDatasAndProjects.userDatas.stats.following}}</div>
                    </div>
                </div>
                <div class="user-details-enternal-links user-details--block">
                    <!--To check if specific photographer social medias filtering are done and has all the things pushed into the "currentPhotographerSocailMediaLinks" array-->
                    <div class="social-media-links" v-if="gettingSpecificSocialMedias">
                        <!--Loop through the "currentPhotographerSocailMediaLinks" array and display the social media images with links-->
                        <div class="social-media-links--links" v-for="individualSocialMediaLinks in currentPhotographerSocailMediaLinks">
                            <!--Binding photographer's social media links to currect image-->
                            <a v-bind:href="individualSocialMediaLinks.url"><img class="social-links" v-bind:src="require('../../images/victor/'+ individualSocialMediaLinks.service_name +'.png')"></a>
                        </div>
                    </div>
                    <div class="link-to-user-behance">
                        <!--Goes to the photographers behance page-->
                        <a v-bind:href="currentPhotographerDatasAndProjects.userDatas.url">
                            <h5>Link to my Behance!</h5>
                        </a>
                    </div>
                </div>
            </div>
            <!--This is where all specific photographer's project are-->
            <div class="user-projects">
                <!--Looping through all the project and show the project data that I need-->
                <div class="user-projects--project" v-for="individualUserProject in currentPhotographerDatasAndProjects.userProjects">
                    <!--(each projects link)This router link goes to photographer project detail page when clicked, also pass the specific project id to the next page-->
                    <router-link v-bind:to="toPhotographerProjectDetailPage + currentPhotographerDatasAndProjects.userDatas.username + '/' + individualUserProject.id">
                        <div class="project-image">
                            <img class="user-project-image" v-bind:src="individualUserProject.covers[404]">
                        </div>
                        <div class="project-info">
                            <div class="project-info--title">{{individualUserProject.name}}</div>
                            <div class="project-info--user-name">{{currentPhotographerDatasAndProjects.userDatas.first_name}} {{currentPhotographerDatasAndProjects.userDatas.last_name}}</div>
                            <div class="up-project-info--project-stats">
                                <div class="up-project-views-stats">
                                    <div class="project-views-stats--icon">
                                        <img class="project-views-stats--icon up-icons fas fa-eye fa-lg">
                                    </div>
                                    <div class="project-views-stats--results results">{{individualUserProject.stats.views}}</div>
                                </div>
                                <div class="up-project-appreciations">
                                    <div class="project-appreciations--icon">
                                        <img class="appreciations--stats up-icons fas fa-thumbs-up fa-lg">
                                    </div>
                                    <div class="project-appreciations--results results">{{individualUserProject.stats.appreciations}}</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'photographer-profile-detail-page',
    // This is receiving data from the previous page which is the photographer list page
    props: ['individualPhotographerUsername'],
    data() {
        return {
            toPhotographerList: "/projects/projects2018/behance-api/photographer-list-page",
            toPhotographerProjectDetailPage: "/projects/projects2018/behance-api/photographer-project-detail-page/",
            // Specific photographer details and projects datas are all inside of this object
            currentPhotographerDatasAndProjects: {
                userDatas: {},
                userProjects: {}
            },
            currentPhotographerUsername: "",
            // Specific photographer's social medias data are in here(after filtering, only facebook, twitter and instagram social medias)
            currentPhotographerSocailMediaLinks: []
        }
    },

    methods: {
        // This function is getting the specific photographer's detail datas
        gettingTheCurrentPhotographerdata: function() {
            this.$http
                .jsonp(
                "https://api.behance.net/v2/users/" + this.currentPhotographerUsername + "?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
                )
                .then(response => {
                    // After getting all the datas from the behance api, put the data into the "currentPhotographerDatasAndProjects.userDatas" object
                    this.currentPhotographerDatasAndProjects.userDatas = response.body.user;
                });
        },
        // This function is getting the specific photographer's projects datas
        gettingTheCurrentPhotographerproject: function() {
            this.$http
                .jsonp(
                "https://api.behance.net/v2/users/" + this.currentPhotographerUsername + "/projects?api_key=b5aUoJqgiuImchymiGRWij8hqs23ewMM"
                )
                .then(response => {
                    // After getting all the datas from the behance api, put the data into the "currentPhotographerDatasAndProjects.userProjects" object
                    this.currentPhotographerDatasAndProjects.userProjects = response.body.projects;
                });
        },


    },
    computed: {
        // This function is to check if all the user details and user projects data are all inside the "currentPhotographerDatasAndProjects" object
        checkCurrentPhotographerDatasAndProjects: function() {
            return this.currentPhotographerDatasAndProjects.userDatas.id && this.currentPhotographerDatasAndProjects.userProjects.length > -1;
            this.gettingSpecificSocialMedias();
        },
        // This is filtering the photographer's social medias links, make sure only facebook, twitter and instagram are pushed in to the "currentPhotographerSocailMediaLinks" array
        gettingSpecificSocialMedias: function() {
            var allUserSocialMedias = this.currentPhotographerDatasAndProjects.userDatas.social_links;
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
        }
    },
    created: function() {
        // When the data are received, put the data into the "currentPhotographerUsername" properties
        this.currentPhotographerUsername = this.individualPhotographerUsername;
        // When the page loads, run both function immediately
        this.gettingTheCurrentPhotographerdata();
        this.gettingTheCurrentPhotographerproject();
    }
}
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
    font-family: 'Open Sans', sans-serif;
}



h4 {
    font-size: 1.5vw;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: capitalize;
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
    background-color: #4C4C4D;
    width: 100%;
    height: 80px;
    border: 2px solid #3D3D3F;
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



/*Styles of the top section where the photographer details are starts here*/

.user-details {
    width: 100%;
    height: 300px;
    background-color: #4C4C4D;
    display: flex;
    border-bottom: 2px solid #3D3D3F;
}

.user-details--block {
    width: 25%;
    border: 1px solid #3D3D3F;
}

.top-intro {
    display: flex;
    height: 75%;
    width: 90%;
    justify-content: center;
    align-items: center;
}




/*First block*/

.user-image {
    margin-left: 38px;
}

.bottom-intro {
    height: 25%;
    text-align: left;
    margin-left: 8%;
}

.user-profile-image {
    width: 138px;
    height: 138px;
    margin-right: 65px;
}

.user-name-company {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 59%;
}

.user-website {
    margin-bottom: 10px;
}

.user-website a {
    text-decoration: none;
}

.user-website a:hover {
    color: #579068;
}




/*Second block*/

.user-details--about-me {
    overflow: auto;
}

.about-me-title {
    font-size: 1.3vw;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 5px;
}

.about-me-paragraph {
    font-size: 0.8vw;
    text-align: left;
    padding: 0 20px;
}

.social-media-links {
    width: 100%;
    height: 70%;
}





/*Third block*/

.user-stats {
    display: flex;
    font-size: 1vw;
    margin-bottom: 40px;
    width: 100%;
    margin-top: 28px;
}

.icons {
    width: 1.8vw;
    margin-left: 20px;
}


.titles {
    font-weight: bold;
    padding-left: 20px;
}

.stats {
    display: flex;
    justify-content: flex-end;
}

.project-views-stats {
    width: 58%
}

.appreciations-stats {
    width: 57%;
}

.followers-stats {
    width: 64%;
}

.following-stats {
    width: 64%;
}



/*Fourth block*/

.social-links {
    width: 4.5vw;
    cursor: pointer;
    user-select: none;
}

.social-media-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.link-to-user-behance {
    background-color: #579068;
    border: 2px solid #63A476;
    height: 31%;
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

.link-to-user-behance a {
    text-decoration: none;
}


/*This is where the bottom section which all the photographer's projects styles are*/

.user-projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.user-projects--project {
    width: 17%;
    height: 400px;
    cursor: pointer;
    margin: 40px 0 20px 0;
}

.user-projects--project a {
    text-decoration: none;
}

.project-image {
    height: 65%;
    width: 100%;
}

.user-project-image {
    height: 100%;
    width: 100%;
}

.project-info {
    height: 35%;
    background-color: #579068;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.project-info--title {
    font-weight: bold;
    font-size: 1vw;
    padding-top: 10px;
}

.project-info--user-name {
    font-size: 1vw;
    margin-top: 10px;
}

.up-project-info--project-stats {
    display: flex;
    heigth: 100%;
    justify-content: center;
    align-items: flex-end;
}

.up-project-views-stats {
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
}

.up-project-appreciations {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.up-icons {
    margin-right: 20px;
    width: 1.2vw;
}

.results {
    font-weight: bold;
    font-size: 0.7vw;
}
</style>
