<template>
  <article>
    <h2>
      <g-link :to="link">
        <img :src="img" />
        {{ text }}
      </g-link>
    </h2>
  </article>
</template>

<script>
import { PlayIcon, SlidersIcon, EyeIcon, HelpCircleIcon } from 'vue-feather-icons'

export default {
  components: {
    PlayIcon,
    SlidersIcon,
    EyeIcon,
    HelpCircleIcon
  },
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
article {
    flex: 1 0;
    border: 1px solid shade($sidebarBright, 10%);
    margin: 0 0 1em;
    background: $sidebarBright;
    padding: 0rem 1rem 1rem 1rem;
    border-radius: 5px;
    text-align: center;
    transition: background .15s ease-in-out, border-color .15s ease-in-out;
    min-width: 45%;

    @include respond-above(sm) {
      margin: 0 1em 2em;
    }

    .dark & {
      border: 1px solid shade($sidebarDark, 10%);
      background: $sidebarDark;
    }
  }

a {
  color: inherit;
  text-decoration: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

img {
  opacity: .8;
  width: 100%;
  border-radius: 5px;
  

  @include respond-above(md) {
    width: 100%;
  }
}
</style>