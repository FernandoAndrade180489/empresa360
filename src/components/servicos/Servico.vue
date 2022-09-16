<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
    <div class="card-body">
      <p class="card-text">{{ dados.descricao }}</p>
    </div>
  </div>
</template>
  
  <script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Servico",
  mixins: [ApiMixin],
  created() {
    const id = this.$route.params.id;
    this.getDadosApi(`http://localhost:3000/servicos/${id}`);
  },
  watch: {
    $route(to) {
      // convenção: to = novoValor, from = valorAntigo
      if (to.params.id != undefined)
        this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
    },
  },
};
</script>
  
  <style>
</style>