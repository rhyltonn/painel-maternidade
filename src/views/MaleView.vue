<template>
  <div class="home h-100 bg-image-male">
    <br />
    <Male class="conteudo" />
    <CorrecaoFundo />

    <a
      target="_blank"
      class="md:absolute bottom-0 right-0 p-10 float-right animate-bounce"
    >
      <img
        src="../assets/img/pacifierBlue.png"
        alt="Masculino"
        class="transition-all rounded-full w-24 -rotate-12 hover:shadow-sm shadow ring hover:ring-4 ring-white"
      />
    </a>
  </div>
</template>

<style scoped>
.conteudo {
  flex: 1 0 auto;
}
</style>

<script>
// @ is an alias to /src
import Male from "@/components/Male.vue";
import Historico from "@/components/Historico.vue";
import CorrecaoFundo from "@/components/CorrecaoFundo.vue";

export default {
  name: "MaleView",
  components: {
    Male,
    Historico,
    CorrecaoFundo,
  },
};
</script>
