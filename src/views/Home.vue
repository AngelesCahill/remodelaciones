<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-sm-12 fotoUser" :class="activandoSOut" v-if="!existeUser">
        <img :src="activeUser.photoURL" alt="">
        <span class="ms-2">Bienvenid@ {{activeUser.displayName}}</span>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <RegistroProfesionales/>
        <ZonaClientes/>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RegistroProfesionales from '@/components/RegistroProfesionales.vue';
import ZonaClientes from '@/components/ZonaClientes.vue';
export default {
  name: 'Home',
  components: {
    RegistroProfesionales,
    ZonaClientes,
  },
  computed: {
    ...mapGetters(['activeUser']),
    existeUser(){
      return !this.activeUser;
    },
    activandoSOut(){
      return this.existeUser ? 'disabled' : '';
    }
  }
}
</script>
<style scoped>
.fotoUser {
  height: 2rem;
  text-align: right;
}
img {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: black;
}
span {
  font-size: 1rem;
  font-weight: 400;
}

</style>