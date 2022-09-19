<template>
  <div>
    <h5>Componente Indicadores</h5>
    <p>Poderiamos recuperar os indicadores do serviço id {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "Indicadores",
  props: ["id"],
  created() {
    // console.log("Indicadores", this.$route.params.id);
    // console.log("Via Props - Indicadores", this.id);
  },
};
</script>

<style>
</style>