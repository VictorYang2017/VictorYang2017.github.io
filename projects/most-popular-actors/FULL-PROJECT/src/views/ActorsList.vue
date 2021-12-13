<template>
  <div class="actors-list">
    <div class="actors-list-back-link">
      <router-link to="/"
        ><font-awesome-icon
          :icon="['fa', 'arrow-alt-circle-left']"
          :style="{ color: 'white' }"
          size="2x"
      /></router-link>
    </div>

    <div class="actors-list-main-container">
      <h1>TODAY'S TOP FIVE POPULAR ACTORS</h1>
      <div class="actors-list-container" v-if="allTopFiveActors">
        <div
          class="actor-container"
          v-for="actor in modifiedTopFiveActors"
          :key="actor.id"
        >
          <router-link :to="'/actorslist/' + actor.id">
            <div class="actor-image">
              <img :src="actor.profile_path" :alt="actor.profile_img_alt" />
            </div>
            <div class="actor-info">
              <h3>{{ actor.name }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getActors } from "../util/TheMoveDatabase";
export default {
  name: "ActorsList",
  data() {
    return {
      topFiveActors: [],
    };
  },
  computed: {
    allTopFiveActors() {
      return this.modifiedTopFiveActors.length === 5;
    },
    modifiedTopFiveActors() {
      const modifiedTopFiveActorsResult = this.topFiveActors.reduce(
        (modifiedData, data) => {
          const newData = {
            id: data.id,
            name: data.name,
            profile_path: `https://image.tmdb.org/t/p/w500${data.profile_path}`,
            profile_img_alt: data.name.toLowerCase(),
          };
          modifiedData.push(newData);
          return modifiedData;
        },
        []
      );
      return modifiedTopFiveActorsResult;
    },
  },
  created() {
    this.getTopFiveActors();
  },
  methods: {
    getTopFiveActors() {
      getActors.then((result) => {
        const topFiveActorsResult = result;
        this.topFiveActors = topFiveActorsResult;
      });
    },
  },
};
</script>

<style scoped>
.actors-list {
  background-color: #191919;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* border: 2px solid red; */
}

.actors-list-back-link {
  padding: 2rem 0 1rem 2rem;
  /* border: 2px solid pink; */
}

.actors-list-back-link a {
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
}

.actors-list-main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  /* flex: 1; */
  /* border: 2px solid blue; */
}

.actors-list-main-container h1 {
  text-align: center;
  margin-bottom: 0.7rem;
  /* border: 2px solid green; */
}

.actors-list-container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0.8rem;
  /* border: 2px solid purple; */
}

.actors-list-container::before {
  content: "";
  position: absolute;
  top: 0;
  width: 45rem;
  opacity: 0.9;
  border-top: 2px solid #fff;
}

.actor-container {
  width: 15rem;
  margin: 1rem;
  border: 4px solid #fff;
  opacity: 0.85;
  transition: transform 200ms ease;
}

.actor-container:hover {
  opacity: 1;
  transform: scale(1.04);
}

.actor-container .actor-image {
  height: 15.625rem;
}

.actor-container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 5%;
}

.actor-container h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  padding: 0.5rem;
  text-align: center;
  border-top: 4px solid #fff;
  /* border: 2px solid green; */
}

@media only screen and (max-width: 760px) {
  .actors-list-container::before {
    width: 95%;
  }
}

@media only screen and (max-width: 640px) {
  .actor-container {
    width: 18rem;
  }

  .actor-container .actor-image {
    height: 17rem;
  }
}

@media only screen and (min-width: 3845px) {
  .actors-list {
    display: none;
  }
}
</style>
