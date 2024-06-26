<template>
    <q-page class="flex content ">
        <section class="mainContent ">
            <p class="text-h5 text-weight-light text-center q-mt-xl">Histórico de cargas:</p>
            <section class="todayExercises q-gutter-y-md q-mt-lg">
                <div class="options full-width text-weight-light row "  no-caps>
                    <p class="q-pl-md q-pr-md q-pt-md"><strong>23/04/2024</strong></p>
                    <p class="q-pl-md q-pr-md q-pt-md">50 kg</p>
                    <q-btn flat round color="dark" icon="edit" />
                </div>
                <div class="options full-width text-weight-light row "  no-caps>
                    <p class="q-pl-md q-pr-md q-pt-md"><strong>23/06/2024</strong></p>
                    <p class="q-pl-md q-pr-md q-pt-md">70 kg</p>
                    <q-btn flat round color="dark" icon="edit" />
                </div>
            </section>
            <section class="finishWorkout absolute-bottom q-mb-xl q-mr-xl q-ml-xl">
                <q-btn class="pushBtn full-width q-pt-md q-pb-md q-mt-lg" unelevated rounded label="Nova Carga" />
            </section>
        </section>
    </q-page>
</template>

<script setup>
  defineOptions({
    name: 'ChangeWeightPage'
  });
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