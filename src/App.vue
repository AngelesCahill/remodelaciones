<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import firebase from 'firebase';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('user', user);
      } else {
        this.$store.dispatch('user', '')
      }
    });
    this.$store.dispatch('traerBaseDatosConstruir');
  },
}
</script>
<style>

</style>
