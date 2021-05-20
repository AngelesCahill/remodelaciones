<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Remodela</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link> 
                    </li>
                    <li>
                        <router-link class="nav-link active" aria-current="page" to="/about">Nosotros</router-link>
                    </li>
                    <li>
                         <router-link class="nav-link active" aria-current="page" to="/cotizar">Cotizar</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="activandoSOut" href="#" tabindex="-1" v-if="!existeUser" @click="signOut">Cerrar Sesión</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Iniciar Sesion
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <!-- Button trigger modal Iniciar Sesión-->
                        <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Inicia Sesión</a></li>
                        <li><a class="dropdown-item" @click="$router.push({name:'Registro'})">Registrarse</a></li>
                    </ul>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
        
        <!-- Modal Iniciar Sesión -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Iniciar Sesión</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="col-6 mx-auto">
                            <form @submit.prevent ="logIn">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                                    <div id="emailHelp" class="form-text">Tus datos nunca serán compartidos</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                                    <div class="form-text">Debe contener 6 o mas caracteres</div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary my-2"  data-bs-dismiss="modal" @click="logIn">Iniciar Sesión</button>
                                </div>
                                <!-- Button trigger modal Recuperar Contraseña-->
                                <a class="d-block my-2 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal2"  data-bs-dismiss="modal">Olvidé mi Password</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Modal Recuperar Contraseña -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">Recuperar Password</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="recuperarPassword">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <button type="submit" class="btn btn-primary">Recuperar Password</button>
                </form>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';
export default {
   name: 'Navbar',
   data() {
       return {
            email: '',
            password: '',
       }
   },
    computed: {
        ...mapGetters(['activeUser']),
        existeUser(){
            return !this.activeUser;
        },
        activandoSOut(){
            return this.existeUser ? 'disabled' : '';
        }
    },
   methods: {
    logIn(){
        if (this.email && this.password.length >= 6) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((result) => {
            console.log(result.user.uid);
            console.log(result.user.photoURL);
            console.log(result.user.email);
            console.log(result.user.displayName);
            console.log(result.user.emailVerified);
            console.log("login");
            this.$router.push({name: 'Home'});

            })
            .catch((error) => {
            console.error(error.code);
            console.error(error.message);
            });
            } else {
            console.log("no se puede");
            }
    },
    recuperarPassword(){
        firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
            console.log('correo enviado');
            this.$router.push({name: 'Home'});
            Swal.fire({
                icon: 'success',
                title: 'Correo enviado',
                text: 'Para recuperar tu contraseña debes revisar tu correo',
                showConfirmButton: false,
                timer: 1500
            })
            
        }).catch((error) => console.error(error));
    },
    signOut(){
            firebase.auth().signOut().then(() => {
                console.log("cerro la sesion");
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Tu sesión se ha cerrado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.$router.replace({name: 'Home'});
            }).catch((error) => {
                console.error(error);
            });
        }

   },   
}
</script>

<style>

</style>