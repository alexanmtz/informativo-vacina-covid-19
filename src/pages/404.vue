<template>
  <div class="content">
    <div class="main">
      <div class="fof">
        <g-image src="~/assets/img/404.png" alt="logo" />
        <h1>Página não encontrada</h1>
        <h4>
          <router-link to="/" exact> Voltar para o início </router-link>
        </h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    height: auto;
  }
  .main {
    color: #888;
    margin: 0;
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  .fof {
    display: table-cell;
    vertical-align: middle;
  }

  .fof h1 {
    font-size: 2.6em;
    display: grid;
  }
}
</style>

<script>
export default {
  metaInfo: {
    title: "Página não encontrada",
  },
};
</script>