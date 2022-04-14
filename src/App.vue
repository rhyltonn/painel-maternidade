<template>
  <!-- <nav>
    <div class="mx-auto bg-white rounded-full logo" style="width: 60%"></div>
  </nav> -->
  <Historico />
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>
import Historico from "@/components/Historico.vue";
export default {
  name: "App",
  components: {
    Historico,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.width-logo {
  width: 40%;
  /* display: none; */
  border-radius: 5px;
}

.bg-image {
  background-image: url("./assets/img/Grupo4.png");
  background-size: 100%;
}

.bg-image-male {
  background-image: url("./assets/img/Grupo1.png");
  background-size: 100%;
}

.bg-image-fem {
  background-image: url("./assets/img/Grupo2.png");
  background-size: 100%;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1.5s ease-in;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 1.5s ease-in;
}
</style>
