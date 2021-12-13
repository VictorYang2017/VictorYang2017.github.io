<template>
  <div class="actor-details">
    <div class="actor-details-back-link">
      <router-link to="/actorslist"
        ><font-awesome-icon
          :icon="['fa', 'arrow-alt-circle-left']"
          :style="{ color: 'white' }"
          size="2x"
      /></router-link>
    </div>

    <div class="actor-details-main-container">
      <div class="actor-details-container" v-if="actorDetailsId">
        <div class="actor-details-left">
          <div class="actor-details-img">
            <img :src="actorImage" :alt="actorImageAlt" />
          </div>
        </div>
        <div class="actor-details-right">
          <div class="actor-details-info">
            <h3 class="actor-details-info--name">{{ actorDetails.name }}</h3>
            <p><span>Gender:</span> {{ actorGender }}</p>
            <p><span>Birthday:</span> {{ actorDetails.birthday }}</p>
            <p>
              <span>Place of birth:</span> {{ actorDetails.place_of_birth }}
            </p>
          </div>
          <div class="actor-details-biography">
            <h3 class="actor-details-info--biography">Biography:</h3>
            <p>{{ actorDetails.biography }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getActors, getActorDetails } from "../util/TheMoveDatabase";
export default {
  name: "ActorDetails",
  props: ["actorId"],
  data() {
    return {
      topFiveActors: [],
      actorDetails: {},
    };
  },
  computed: {
    actorDetailsId() {
      return this.actorDetails.id;
    },
    actorImage() {
      return this.actorDetails.profile_path
        ? `https://image.tmdb.org/t/p/w500${this.actorDetails.profile_path}`
        : "";
    },
    actorImageAlt() {
      return this.actorDetails.name.toLowerCase();
    },
    actorGender() {
      let gender = "";
      if (this.actorDetails.gender === 1) {
        gender = "Female";
      } else if (this.actorDetails.gender === 2) {
        gender = "Male";
      } else {
        gender = "Unspecified";
      }
      return gender;
    },
  },
  methods: {
    checkCorrectActor() {
      getActors.then((result) => {
        const topFiveActorsResult = result;
        const correctActor = topFiveActorsResult.find(
          (actor) => actor.id === +this.actorId
        );
        if (!correctActor) {
          this.$router.push("/");
        } else {
          this.getActor(correctActor.id);
        }
      });
    },

    getActor(correctActorId) {
      getActorDetails(correctActorId).then((result) => {
        this.actorDetails = result;
      });
    },
  },

  created() {
    this.checkCorrectActor();
  },
};
</script>

<style scoped>
.actor-details {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #191919;
  /* border: 2px solid red; */
}

.actor-details-back-link {
  padding: 2rem 0 1rem 2rem;
  /* border: 2px solid pink; */
}

.actor-details-back-link a {
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
}

.actor-details-main-container {
  height: 100%;
  flex: 1;
  /* border: 2px solid blue; */
}

.actor-details-container {
  display: flex;
  max-width: 93.75rem;
  margin: 0 auto;
  /* border: 2px solid purple; */

  width: 90%;
}

.actor-details-container img {
  /* max-width: 100%; */
  width: 100%;
}

.actor-details-left {
  padding-top: 1.2rem;
  /* border: 2px solid green; */
}

.actor-details-right {
  flex: 1;
  padding: 0 3rem 2rem 3rem;
  /* border: 2px solid green; */
}

.actor-details-info {
  margin-bottom: 2rem;
}

.actor-details-info p {
  margin-bottom: 0.4rem;
}

.actor-details-info p span {
  font-weight: bold;
}

.actor-details-info--name {
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
}

.actor-details-biography h3 {
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

@media only screen and (max-width: 1000px) {
  .actor-details-left {
    flex: 1;
  }

  .actor-details-right {
    flex: 2;
  }
}

@media only screen and (max-width: 720px) {
  .actor-details-container {
    flex-direction: column;
    width: 100%;
  }

  .actor-details-left {
    padding: 0 5%;
  }

  .actor-details-right {
    padding: 2rem 1rem;
  }
}

@media only screen and (min-width: 3845px) {
  .actor-details {
    display: none;
  }
}
</style>
