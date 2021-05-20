<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center my-5">
                <h2>Registrate aqui !!</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 mx-auto mt-5">
                <form @submit.prevent="registrarUsuario">
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleInputName" v-model="displayName">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                        <div id="emailHelp" class="form-text">Tus datos nunca serán compartidos</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <div class="mb-3">
                        <label for="photoURLID" class="form-label">Photo URL</label>
                        <input type="text" class="form-control" id="photoURLID" v-model="photoURL">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="registrarUsuario">Registrarse</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import Swal from 'sweetalert2';
export default {
    name: 'Registro',
    data(){
        return {
            displayName: '',
            email: '',
            password: '',
            photoURL: '',
        }
    },
    methods: {
        registrarUsuario(){
            if(this.displayName.length > 2 && this.email && this.password.length >= 6 && this.photoURL){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((userCredential) => {
                    return userCredential.user.updateProfile({
                            displayName: this.displayName,
                            photoURL: this.photoURL,
                        })
                        .then (()=>{
                            this.displayName = '',
                            this.photoURL = '',
                            this.email = '',
                            this.password = '',
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Te has registrado con éxito',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.$router.push({name:'Home'})
                        }).catch((error)=>{console.error(error)})
                    
                })
                .catch((error) => {
                    console.error(error.code);
                    console.error(error.message);
                    
                });
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al intentar registrarse, inténtalo nuevamente!'
                })
            }
        }
    } 
}
</script>

<style>

</style>