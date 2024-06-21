<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="mainNav">
      <q-toolbar class="q-pt-sm q-pb-sm">
        <q-avatar style="width: 56px; height: 56px;">
          <img src="../assets/img/logo-fitmate-previus.png">
        </q-avatar>
        <q-toolbar-title>
          FitMate
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          size="16px"
          @click="toggleRigthDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      class="floatMenu"
      side="right"
      v-model="rigthDrawerOpen"
      show-if-above
    >

    <q-item-label header>
      Essential Links
    </q-item-label>

    <q-list>
      <q-btn class="options full-width q-pt-md q-pb-md" label="Minha Conta" />
      <q-btn class="options full-width q-pt-md q-pb-md" label="Alterar Treinos" />
      <q-btn class="options full-width q-pt-md q-pb-md" label="Sair" />
    </q-list>

    <q-item-label class="full-width text-center fixed-bottom q-mb-xl">
      Create for @LiraDevelopers - 2024
    </q-item-label>
  </q-drawer>

  <q-footer bordered class="mainFooter">
    <q-tabs no-caps indicator-color="transparent" class="q-pt-sm q-pb-sm" v-model="tab">
      <q-tab><q-icon name="home" size="32px" /></q-tab>
      <q-tab><q-icon name="fitness_center" size="32px"/></q-tab>
    </q-tabs>
  </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

const rigthDrawerOpen = ref(false)

function toggleRigthDrawer () {
  rigthDrawerOpen.value = !rigthDrawerOpen.value
}
</script>

<style lang="sass">

.mainNav
  background-color: #1B1A17
  color: #E6D5B8

.mainFooter
  background-color: #1B1A17
  color: #E6D5B8

.floatMenu
  background-color: #E6D5B8
  .options
    background-color: #CCA981
  

</style>
