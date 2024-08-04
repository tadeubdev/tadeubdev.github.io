<template>
  <welcome-component />
</template>

<script>
import WelcomeComponent from './components/WelcomeComponent.vue'

export default {
  name: 'App',
  components: {
    WelcomeComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
:root {
  --primary-color: #60baee;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;
}
#app {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background: #111;
  color: #FFF;
  position: relative;
}
.text-primary {
  color: var(--primary-color);
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
}
.content {
  width: 95vw;
  max-width: 980px;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .content {
    width: 90vw;
    max-width: 90vw;
  }
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #CCC;
}
::-webkit-scrollbar-thumb {
  background: #777;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
