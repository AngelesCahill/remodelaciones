import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    cotizacionConstruccion: [],
  },
  getters: {
    activeUser(state) {
      return state.user;
    }
  },
  mutations: {
    USER(state, datoUser) {
      state.user = datoUser;
    },
    TRAERBASEDATOS(state) {
      
    }
  },
  actions: {
    user({ commit }, datoUser) {
      commit('USER', datoUser);
    },
    traerBaseDatos({ commit }) {
      firebase.firestore().collection('construir').onSnapshot((respuesta) =>{
        let datos = [];
        respuesta.forEach(element =>{
          console.log(element.data(), element.id);
          datos.push({
            idDoc: element.id,
            nombre: element.data().nombre,
            email: element.data().email,
            celular: element.data().celular,
            region: element.data().region,
            ciudad: element.data().ciudad,
            comuna: element.data().comuna,
            tipo: element.data().tipo,
            descripcion: element.data().descripcion,
            altura: element.data().altura,
            ancho: element.data().ancho,
            largo: element.data().largo,
          });
      
    };
  },
  
})
