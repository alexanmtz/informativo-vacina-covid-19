<template>
  <div>
    <small style="display:inline-block;">Foto da capa por<br /><a class="photo-contrib1" href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> no <a class="photo-contrib2" href="https://unsplash.com/s/photos/vaccine-corona?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></small>
    <a href="https://github.com/alexanmtz/informativo-vacina-covid-19" :class="size" title="Git-repository" aria-label="Projeto de vacinação para Covid no Github">
      <github-icon class="icon" />
      {{text}}
    </a>
  </div>
</template>

<script>
import { GithubIcon } from 'vue-feather-icons'

export default {
  components: {
    GithubIcon
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    text: {
      type: String,
      default: 'Contribua no Github'
    }
  }
}
</script>

<style lang="scss" scoped>
.git {
  
  text-align: center;
}
small {
  width: 100%;
  
}
a {
  
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 12px;
  line-height: 32px;
  font-weight: 700;
  transition: color .15s ease-in-out, background .15s ease-in-out;
  

  &:focus {
    outline: none;
  }

  .dark & {
    color: $textBright;
    background: $backgroundBright;
  }

  .bright & {
    color: $textDark;
    background: $backgroundDark;
  }

  svg {
    width: 18px;
    height: 18px;
    vertical-align: -6px;
    margin-right: 4px;
  }

  &.large {
    @include respond-above(sm) {
      
      font-size: 18px;
      padding: 12px 20px;
      line-height: 24px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>

