<template>
  <div class="flex justify-center">
    <div
      class="h-card flex flex-col md:flex-row rounded-lg bg-white shadow-lg"
      style="transition: 0.3s"
    >
      <img
        class="object-cover w-10/12 rounded-t-lg mx-auto md:rounded-none md:rounded-l-lg"
        src="../assets/img/img2.jpg"
        style="transition: 0.6s"
        alt=""
      />
      <div class="p-6 justify-start relative">
        <img
          src="../assets/img/logo-azul.png"
          class="w-6/12 mb-2 mx-auto p-4 mt-2"
          alt=""
        />
        <div class="text-gray-500 mb-2 text-center pl-6">
          <h1 class="max font-bold mb-2 mt-6">Nome: Heitor</h1>
          <!-- <br /> -->
          <h2 class="max font-bold mb-2">Pai: José</h2>
          <!-- <br /> -->
          <h2 class="max font-bold mb-2">Mãe: Maria</h2>
          <!-- <br /> -->
          <h2 class="max font-bold mb-2">Nascimento: 14/04/2022</h2>
          <!-- <br /> -->
          <h2 class="max font-bold mb-2">Hora: 13:16</h2>
          <!-- <br /> -->
          <h2 class="max font-bold mb-2">Peso: 3.33kg</h2>
          <!-- <br /> -->
          <h2 class="max font-bold">Estatura: 48.3cm</h2>
        </div>
        <!-- <p class="text-gray-600 text-xs">Last updated 3 mins ago</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Male",
  components: {},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.width-div {
  padding: 0px 1%;
  /* height: 100%; */
  width: 100%;
  height: 100%;
}

.h-card {
  height: 35vw;
  width: 90vw;
}

@media (max-width: 767px) {
  .h-card {
    height: auto;
    width: 90vw;
    padding: 10px;
  }
}

.width-logo {
  width: 60%;
  /* display: none; */
  border-radius: 5px;
}

.bg-white {
  background-color: rgba(255, 255, 255, 0.7);
}

h1.max {
  font-size: max(100%, 2vw) !important;
  /* line-height: 1.5vw !important; */
}

h2.max {
  font-size: max(100%, 1.5vw) !important;
  /* line-height: 2vw !important; */
}
</style>
