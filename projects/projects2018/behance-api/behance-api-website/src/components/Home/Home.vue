<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <router-link to="/projects/projects2018/behance-api/"><img src="../../images/logoWhite.png"></router-link>
      </div>
      <div class="contact">
        <router-link to="#">Contact</router-link>
      </div>
    </div>

    <div class="description">
      <h1>We are a perfect blend of Creativity,</h1>
      <h1>Energy and Communication</h1>
      <p>This is a showcase of talent of our passionate designers.</p>
    </div>
    <div class="designCategories">
      <div class="photography line-one line">
        <h1>
          <router-link to="/projects/projects2018/behance-api/photography">Photography</router-link>
        </h1>
      </div>
      <div class="gameDesign line-two line">
        <h1>
          <router-link to="#">Game Design</router-link>
        </h1>
      </div>
      <div class="graphicDesign line-three line">
        <h1>
         <router-link to="#">Graphic Design</router-link>
        </h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Css Reset*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block
}

body {
  line-height: 1
}

ol,
ul {
  list-style: none
}

blockquote,
q {
  quotes: none
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

.container {
  background: url("../../images/homeBackground.png") no-repeat fixed center;
  width: 100vw;
  height: 100vh;
  color: white;
  background-size: 100%;
}

.header .logo {
  position: absolute;
  left: 0;
}

.logo img {
  width: 25vw;
  margin: 30px 0 0 30px;
}

.header .contact {
  position: absolute;
  right: 0;
  margin: 80px 80px 0 0;
  font-size: 1vw;
  font-family: 'Anonymous Pro', monospace;
  letter-spacing: 1px;
}

.contact:hover {
  font-size: 1.1vw;
}

a {
  color: #fff;
}

a:hover {
  text-decoration: none;
}

.designCategories {
  top: 40%;
  right: 0;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  width: 93%;
  align-items: flex-end;
  height: 100vh;
  justify-content: flex-end;
}

.photography h1 {
  position: absolute;
  padding-left: 10px;
  bottom: 0;
  font-size: 1.5vw;
  user-select: none;
  animation-name: fontmoveup;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  letter-spacing: 2px;
}

.gameDesign h1 {
  position: absolute;
  padding-left: 10px;
  font-size: 1.5vw;
  bottom: 0;
  user-select: none;
  animation-name: fontmoveuptwo;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  letter-spacing: 2px;
}

.graphicDesign h1 {
  position: absolute;
  padding-left: 10px;
  font-size: 1.5vw;
  bottom: 0;
  user-select: none;
  animation-name: fontmoveupthree;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  letter-spacing: 2px;
}

.graphicDesign a:hover {
  color: #ff0000;

  font-size: 1.7vw;
}

.gameDesign a:hover {
  color: #39b54a;
  font-size: 1.7vw;
}

.photography a:hover {
  color: #F15a24;
  font-size: 1.7vw;
}

.line h1:hover {
  font-size: 1.7vw;
}

.description {
  position: absolute;
  top: 30%;
  left: 50px;
  font-family: 'Anonymous Pro', monospace;
  line-height: 53px;
  text-align: left;
}

.description h1 {
  font-size: 2.5vw;
}

.description p {
  font-size: 1.2vw;
}














/*This is the line part*/

.line {
  border: none;
  width: 20%;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.line-one {
  animation-name: lineraiseone;
}

.line-two {
  animation-name: lineraisetwo;
}

.line-three {
  animation-name: lineraisethree;
}














/*This is the line and word animation part*/

@keyframes lineraiseone {
  20% {
    height: 0;
  }
  100% {
    border-left: 2px solid white;
    height: 300px;
  }
}

@keyframes lineraisetwo {
  20% {
    height: 0;
  }
  100% {
    border-left: 2px solid white;
    height: 500px;
  }
}

@keyframes lineraisethree {
  20% {
    height: 0;
  }
  100% {
    border-left: 2px solid white;
    height: 700px;
  }
}

@keyframes fontmoveup {
  20% {
    position: absolute;
    bottom: 0;
    display: block;
    opacity: 0;
  }
  100% {
    position: absolute;
    bottom: 300px;
    display: block;
    opacity: 1;
  }
}

@keyframes fontmoveuptwo {
  20% {
    position: absolute;
    bottom: 0;
    display: block;
    opacity: 0;
  }
  100% {
    position: absolute;
    bottom: 500px;
    display: block;
    opacity: 1;
  }
}

@keyframes fontmoveupthree {
  20% {
    position: absolute;
    bottom: 0;
    display: block;
    opacity: 0;
  }
  100% {
    position: absolute;
    bottom: 700px;
    display: block;
    opacity: 1;
  }
}











/*Responsive design start*/

@media screen and (max-width:640px) {

  .container {
    display: flex;
    flex-direction: column;
    background: url("../../images/homeBackground.png") no-repeat fixed center;
  }

  .logo img {
    width: 50vw;
  }

  .header .contact {
    font-size: 2vw;
  }
  .contact:hover {
    font-size: 2.2vw;
  }
  .designCategories {
    width: 100%;
  }
  .description {
    position: absolute;
    top: 25%;
    line-height: 40px;
  }
  .description h1 {
    font-size: 4.1vw;
  }

  .description p {
    font-size: 2.5vw;
  }

  .line {
    border: none;
    width: 34%;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .line h1 {
    font-size: 2.4vw;
    letter-spacing: 1px;
    padding-left: 0;
  }
  .line a:hover {
    font-size: 2.6vw;
  }

  .line-one {
    animation-name: lineraiseone;
    width: 28%;
  }

  .line-two {
    animation-name: lineraisetwo;
    width: 28%;
  }

  .line-three {
    animation-name: lineraisethree;
  }
  @keyframes lineraiseone {
    20% {
      height: 0;
    }
    100% {
      border-left: 2px solid white;
      height: 230px;
    }
  }

  @keyframes lineraisetwo {
    20% {
      height: 0;
    }
    100% {
      border-left: 2px solid white;
      height: 360px;
    }
  }

  @keyframes lineraisethree {
    20% {
      height: 0;
    }
    100% {
      border-left: 2px solid white;
      height: 480px;
    }
  }
  @keyframes fontmoveup {
    20% {
      position: absolute;
      bottom: 0;
      display: block;
      opacity: 0;
    }
    100% {
      position: absolute;
      bottom: 240px;
      display: block;
      opacity: 1;
    }
  }

  @keyframes fontmoveuptwo {
    20% {
      position: absolute;
      bottom: 0;
      display: block;
      opacity: 0;
    }
    100% {
      position: absolute;
      bottom: 370px;
      display: block;
      opacity: 1;
    }
  }

  @keyframes fontmoveupthree {
    20% {
      position: absolute;
      bottom: 0;
      display: block;
      opacity: 0;
    }
    100% {
      position: absolute;
      bottom: 490px;
      display: block;
      opacity: 1;
    }
  }
}
</style>