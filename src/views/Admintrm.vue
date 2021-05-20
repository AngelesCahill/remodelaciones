<template>
    <div>
        <h1>{{enviarCotizacionConstruccion}}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   name: 'Admintrm',
   computed: {
       ...mapGetters(['enviarCotizacionConstruccion']),
   },   
}
</script>

<style>

</style>