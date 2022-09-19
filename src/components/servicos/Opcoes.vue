<template>
  <div>
    <h5>Componente Opções</h5>
    <p>Poderiamos recuperar as opções do serviço id {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "Opcoes",
  props: ["id"],
  created() {
    // console.log("Opcoes", this.$route.params.id);
    // console.log("Via Props - Opções", this.id);
  },
  beforeRouteUpdate() {
    // to, from, next
    console.log("Guarda de componente beforeRouteUpdate");
  },
};
</script>

<style>
</style>