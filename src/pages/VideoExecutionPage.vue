<template>
    <q-page class="flex content ">
        <section class="mainContent ">
            <p class="text-h5 text-weight-light text-center q-mt-xl">Como executar*:</p>
            <section class="q-gutter-y-sm q-mt-xl" style="height:;">
                <q-video
                :ratio="16/24"
                src="https://www.youtube.com/embed/iSePrZvXDu0?si=D0yX4EGDPxd610V4"
                />
            </section>
            <p class="text-h6 text-weight-bold text-center absolute-bottom q-mb-xl">*Consulte também seu personal</p>
        </section>
    </q-page>
</template>

<script setup>
  defineOptions({
    name: 'VideoExecutionPage'
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