<template>
  <Layout :sidebar="true">
    <div class="content">
      <h1>{{ $static.metadata.siteName }}</h1>
      <small style="text-align: center; margin-bottom: 40px; margin-top: -40px"> {{ this.description }} </small>
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
    siteName
  },
  docs: allDoc(filter: { tags: {contains: "FAQ", published: true } }) {
    edges {
      node {
        title,
        slug,
        path,
        tags
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
    return {
      title: this.description,
      meta: [
        { key: 'description', name: 'description', content: 'A theme for static site documentation based on Gridsome, ready to deploy to Netlify in one click.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  max-width: 600px;
  margin: 1.5em auto 1.5em;

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
