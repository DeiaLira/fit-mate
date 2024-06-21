<template>
    <q-page class="flex content">
      <section class="mainContent q-gutter-y-xl">
        <p class="text-h5 text-weight-light text-center">Treino de hoje:</p>
        <q-btn push class="mainWorkout full-width q-pt-xl q-pb-xl q-mb-xl text-h5 text-weight-light" rounded label="Treino A" />
        <q-btn class="newWorkout full-width q-pt-md q-pb-md" unelevated rounded label="Selecionar um novo treino" />
      </section> 
    </q-page>
  </template>
  
  <script setup>
  defineOptions({
    name: 'HomePage'
  });
  </script>
  
<style lang="sass">
  
.mainContent
    width: 80%
    margin: 144px auto
    
.content
    background-color: #CCA981
    .mainWorkout
      background-color: #E6D5B8
      max-width: 100%
    .newWorkout
      background-color: #1B1A17
      color: #E6D5B8  
  
</style>
  