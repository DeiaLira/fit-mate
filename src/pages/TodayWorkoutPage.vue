<template>
    <q-page class="flex content ">
        <section class="mainContent">
            <p class="text-h5 text-weight-light text-center q-mt-xl">Treino A:</p>
            <section class="todayExercises q-gutter-y-sm q-mt-lg">
                <q-btn class="options full-width q-pt-lg q-pb-lg text-h6 text-weight-light" label="Agachamento Livre" no-caps @click="counter.alert = !counter.alert"/>
                    <q-dialog v-model="counter.alert">
                        <q-card class="details">
                            <q-card-section>
                                <div class="text-h6 text-center">Detalhes do exercício:</div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                <div class="q-pr-xl q-pl-xl">
                                    <p class="text-h6 text-weight-light text-center">4 séries de 12 repetições</p>
                                    <p class="text-h6 text-weight-light text-center">Carga atual: 50kg</p>
                                </div>
                                <div class="video q-mt-xl">
                                    <span class="material-icons" style="">play_circle_filled</span>
                                    <p class="text-h6 text-weight-light q-pl-md q-mt-md">Vídeo da execução</p>
                                </div>

                            </q-card-section>

                            <q-card-actions class="actionAlert">
                                <q-btn class="actionBtn full-width q-mt-lg" unelevated rounded label="Alterar Carga"/>
                                <q-btn class="actionBtn full-width q-mt-lg q-mb-lg" unelevated rounded label="Concluir exercício" v-close-popup/>
                            </q-card-actions>
                        </q-card>
                    </q-dialog>
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
    import {useCounterStore} from '../stores/example-store.js'

  defineOptions({
    name: 'TodayWorkoutPage'
  });

  const counter = useCounterStore();


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

.details
    background-color: #1B1A17
    color: #E6D5B8
    .actionAlert
        max-width: 60%
        margin: 0 auto

.video
    display: flex
    justify-content: center

.material-icons
    font-size: 48px

.actionBtn
    background-color: #E6D5B8
    color: #1B1A17
    
 
    
</style>
  