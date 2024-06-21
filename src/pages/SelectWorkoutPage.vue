<template>
    <q-page class="flex content ">
        <section class="mainContent">
            <p class="text-h5 text-weight-light text-center q-mt-xl">Selecione um novo treino</p>
            <section class="todayExercises q-gutter-y-sm q-mt-lg">
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Treino A" no-caps />
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Treino B" no-caps />
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Treino C" no-caps />
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Treino D" no-caps />
            </section>
        </section>
      
    </q-page>
  </template>

<script setup>
  defineOptions({
    name: 'SelectWorkoutPage'
  });
</script>

<style lang="sass">
    
.content
    background-color: #CCA981

.mainContent
    width: 80%
    margin: 0 auto
    .options
        background-color: #E6D5B8

  
</style>