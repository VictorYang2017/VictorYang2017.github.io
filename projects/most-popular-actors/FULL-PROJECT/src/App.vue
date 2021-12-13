<template>
  <div id="app">
    <router-view />
    <div class="over-limit-resolution">Over 4k</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style global>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  min-width: 20rem;
}



h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  color: white;
  font-family: 'Open Sans', sans-serif;
}

h1{
  font-family: 'Playfair Display', serif;
}

h3{
font-family: 'Playfair Display', serif;
}

a{
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
}

button {
  font-family: 'Playfair Display', serif;
  background-color: transparent;
  cursor: pointer;
}

.over-limit-resolution {
  display: none;
  color: #fff;
}


/* display: none; each component do it themself */

/* @media only screen and (min-width: 3845px) {
  .home {
    display: none;
  }
  .actors-list {
    display: none;
  }
  .actor-details {
    display: none;
  }
  .over-limit-resolution {
    display: block;
  }
} */

@media only screen and (min-width: 3845px) {
  .over-limit-resolution {
    display: block;
  }
}
</style>
