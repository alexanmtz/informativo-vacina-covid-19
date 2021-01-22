<template>
  <Layout :sidebar="true">
    <div class="content">
      <g-image src="~/assets/img/vaccine-head.jpg" alt="logo" />
      <h1>{{ $static.metadata.siteName }}</h1>
      <small style="text-align: center; margin-top: -40px; padding-bottom: 20px;"> {{ this.description }} </small>
      <small style="color: gray; text-align: center;">* Este site não representa nenhum órgão oficial do governo e é feito como iniciativa open-source por uma pessoa física</small>
      <small style="color: gray; text-align: center; margin-bottom: 20px;">* O conteúdo não é de nossa responsabilidade e foi feito de forma colaborativa pela comunidade</small>
      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut 
          v-for="doc in $static.docs.edges"
          :key="doc.node.title"
          :link="doc.node.path"
          :text="doc.node.title"
          icon="help-circle-icon" />
      </nav>
      <GitLink class="git" size="small" />
    </div>
  </Layout>
</template>

<static-query>

query {
  metadata {
    siteName,
    siteUrl
  },
  docs: allDoc(order:ASC, filter: { tags: {contains: "FAQ" }, published: { eq: true } }) {
    edges {
      node {
        title,
        slug,
        path,
        tags,
        published
      }
    }
  }
}
</static-query>

<script>
import GitLink from '~/components/GitLink.vue'
import Shortcut from '~/components/Shortcut.vue'

export default {
  components: {
    GitLink,
    Shortcut
  },
  data() {
    return {
      description: 'Combatendo as fake news sobre a vacinação contra o vírus da COVID-19'
    }
  },
  metaInfo() {
    const imagePath = `${this.$static.metadata.siteUrl}/main-image.jpg`
    return {
      title: this.description,
      meta: [
        { key: 'description', name: 'description', content: 'Um guia informativo sobre a vacinação contra o Covid-19 para ajudar no combate as fake news' },
        {
          key: 'og:image',
          property: 'og:image',
          content: imagePath
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    height: auto;
  }
}

h1 {
  text-align: center;
  max-width: 600px;
  margin: .5em auto 1.5em;

  @include respond-above(md) {
    max-width: 1000px;
  }
}

h2 {
  font-size: 1.4rem;
  margin: 0;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;

  @include respond-above(sm) {
    flex-direction: row;
  }
}

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>
