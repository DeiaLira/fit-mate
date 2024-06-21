<template>
    <q-page class="flex content ">
        <section class="mainContent">
            <p class="text-h5 text-weight-light text-center q-mt-xl">Treino A:</p>
            <section class="todayExercises q-gutter-y-sm q-mt-lg">
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Agachamento Livre" no-caps />
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Cadeira extensora" no-caps />
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Leg Press 45°" no-caps />
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Panturrilha em pé" no-caps />
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Cadeira Romana" no-caps />
            </section>
            <section class="finishWorkout q-mt-xl q-mb-lg">
                <q-btn class="pushBtn full-width q-pt-md q-pb-md q-mt-lg" unelevated rounded label="Concluir treino" />
            </section>
        </section>
      
    </q-page>
  </template>
  
  <script setup>
  defineOptions({
    name: 'TodayWorkoutPage'
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

.pushBtn
    background-color: #1B1A17
    color: #E6D5B8
 
  
</style>
  