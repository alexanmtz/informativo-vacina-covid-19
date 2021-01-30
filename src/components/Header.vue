<template>
  <header class="header" :class="{'header--scrolled' : pageScrolled}">
    <Logo :color="logoColor" />
    <nav class="nav">
      <ThemeSwitch v-on:theme-change="updateLogo" />
      <MenuToggle v-if="menuToggle" />
    </nav>
    <ClientOnly>
      <div class="share-buttons">
        <small>Compartilhar</small>
        <div class="items">
          <twitter-button
            :shareUrl="$page && $page.doc.path ? $static.metadata.siteUrl + '/' + $page.doc.path : $static.metadata.siteUrl"
            shareDescription="Um guia informativo sobre a vacina para COVID-19"
            class="share-button--outline"
            
          />
          <facebook-button
            :url="$page && $page.doc.path ? $static.metadata.siteUrl + '/' + $page.doc.path : $static.metadata.siteUrl"
            description="Um guia informativo sobre a vacina para COVID-19"
            class="share-button--outline"
            
          />
          <whats-app-button
            :url="$page && $page.doc.path ? $static.metadata.siteUrl + '/' + $page.doc.path : $static.metadata.siteUrl"
            class="share-button--outline"
            
          />
        </div>
      </div>
    </ClientOnly>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteUrl
  }
}
</static-query>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    path
    image,
    date (format: "D  MMMM YYYY", locale: "pt-BR")
    timeToRead
    content
  }
}
</page-query>

<script>
import ThemeSwitch from '~/components/ThemeSwitch.vue'
import MenuToggle from '~/components/MenuToggle.vue'
import Logo from '~/components/Logo.vue'
import throttle from 'lodash/throttle'
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import WhatsAppButton from "vue-share-buttons/src/components/WhatsAppButton"

export default {
  components: {
    ThemeSwitch,
    MenuToggle,
    Logo,
    TwitterButton,
    FacebookButton,
    WhatsAppButton
  },
  props: {
    menuToggle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pageScrolled: false,
      logoColor: 'bright'
    }
  },
  methods: {
    updateLogo: function() {
      this.logoColor = (this.logoColor == 'dark' ? 'bright' : 'dark')
    },
    headerScroll: function() {
      let fromTop = window.scrollY

      if ((fromTop > 40 && this.pageScrolled == false) || (fromTop <= 40 && this.pageScrolled == true)) {
        this.pageScrolled = !this.pageScrolled
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.headerScroll)

    if (process.isClient) {
      this.logoColor = localStorage.getItem('theme')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vw;
  left: 0px;
  z-index: 10;
  transition: padding .15s linear, background .15s linear, border-color .15s linear;
  will-change: padding, background;
  border-bottom: 1px solid transparent;

  @include respond-above(sm) {
    padding: 30px;
  }

  &--scrolled {
    @include respond-below(sm) {
      padding: 15px 30px;

      .dark & {
        background: $sidebarDark;
        border-color: shade($sidebarDark, 40%);
      }

      .bright & {
        background: $sidebarBright;
        border-color: shade($sidebarBright, 10%);
      }
    }
  }
}

.share-buttons {
  small {
    display: block;
    text-align: center;
  }
  
  position: absolute;
  right: 50px;
  bottom: -450px;
  
  .items {
    text-align: center;
    width: 100px;
  }
  @include respond-below(sm) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 10px;
    
    background: rgba(216, 234, 245, 0.95);
    .items {
      display: inline;
    }
  }
}

nav {
  display: flex;
}
</style>

