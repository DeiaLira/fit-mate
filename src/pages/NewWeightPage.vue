<template>
    <q-page class="flex content ">
        <section class="mainContent ">
            <p class="text-h5 text-weight-light text-center q-mt-xl">Editar carga:</p>
            <section class="q-gutter-y-md q-mt-lg">
                
                <p class="text-h6 text-weight-light ">Data:</p>
                <q-input filled v-model="counter.date" mask="date" :rules="['date']">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="counter.date">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>

                <p class="text-h6 text-weight-light ">Carga:</p>
                <q-input square filled v-model="text" label="" />
                
  
            </section>
            <section class="finishWorkout absolute-bottom q-mb-xl q-mr-xl q-ml-xl">
                <q-btn class="pushBtn full-width q-pt-md q-pb-md q-mt-lg" unelevated rounded label="Salvar Carga" />
            </section>
        </section>
    </q-page>
</template>

<script setup>
import {useCounterStore} from '../stores/example-store.js'

  defineOptions({
    name: 'ChangeWeightPage'
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
        display: flex
        justify-content: space-around
        background-color: #E6D5B8
        font-size: 16px

.pushBtn
    background-color: #1B1A17
    color: #E6D5B8
  
  
</style>