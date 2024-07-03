<template>
<q-layout class="content">
  <q-page-container class="mainContent fixed-center">
    <div class="mainImage">
      <q-img 
      src="../assets/img/logo-fitmate.png"
      spinner-color="white"
      style="height: 300px; width: 300px;"
      />
    </div>
    
    <section class="loginArea q-gutter-y-lg">
      <q-input class="userInput" standout="bg-grey-10 text-white" v-model="text" label="Usuário:" :dense="dense" />
      <q-input class="userInput" v-model="password" filled type="password" standout="bg-grey-10 text-white" label="Senha:" :dense="dense"/>
      <a class="helperBtn q-mr-xl q-ml-xl text-h7 text-weight-light">Esqueceu a senha?</a>
      <q-btn class="pushBtn q-pt-md q-pb-md q-pr-xl q-pl-xl q-mr-xl q-ml-xl" unelevated rounded label="Entrar" to="/home"/>
    </section>
    <section class="newUserArea q-mt-xl">
      <p class="text-h7 text-weight-light">Novo por aqui?</p>
      <q-btn class="newUserBtn q-pt-md q-pb-md q-pr-xl q-pl-xl q-mr-xl q-ml-xl" unelevated rounded label="Cadastre-se" />
    </section>
  </q-page-container>
</q-layout>
  
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="sass">

.content
  background-color: #CCA981
  .mainContent
    max-width: 80%
    margin: 0 auto
    .mainImage
      text-align: center
            

.loginArea
  display: flex
  flex-direction: column
  text-align: center
  .userInput
    background-color: #E6D5B8
  .helperBtn
    text-decoration: underline
  .pushBtn
    background-color: #1B1A17
    color: #E6D5B8

.newUserArea
  display: flex
  flex-direction: column
  text-align: center
  .newUserBtn
    background-color: #E6D5B8
    color: #1B1A17

</style>
