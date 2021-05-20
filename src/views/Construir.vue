<template>
    <div class="container">
        <div class="row mx-5">
            <div class="col-sm-12 text-center my-5">
                <h1>¿Que deseas construir?</h1>
            </div>
        </div>
        <div class="row">
            <form @submit.prevent="ingresarCotizacion">
                <div class="row">
                    <div class="form-check class col-sm-12 col-md-4 col-lg-2">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" checked v-model="casa">
                        <label class="form-check-label" for="flexRadioDisabled">
                            Casa
                        </label>
                    </div>
                    <div class="form-check col-sm-12 col-md-4 col-lg-2">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled1" checked v-model="galpon">
                        <label class="form-check-label" for="flexRadioCheckedDisabled1">
                            Galpon
                        </label>
                    </div>
                     <div class="form-check class col-sm-12 col-md-4 col-lg-2">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled2" checked v-model="quincho">
                        <label class="form-check-label" for="flexRadioDisabled2">
                            Quincho
                        </label>
                    </div>
                    <div class="form-check class col-sm-12 col-md-4 col-lg-2">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled2" checked v-model="terraza">
                        <label class="form-check-label" for="flexRadioDisabled2">
                            Terraza
                        </label>
                    </div>
                    <div class="form-check col-sm-12 col-md-4 col-lg-2">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled3" v-model="piscina">
                        <label class="form-check-label" for="flexRadioCheckedDisabled3">
                            Piscina
                        </label>
                    </div>
                    <div class="form-check class col-sm-12 col-md-4 col-lg-2">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled2" checked v-model="jardin">
                        <label class="form-check-label" for="flexRadioDisabled2">
                            Jardín
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div  class="col-12 my-3">
                        <h4>Ubicación</h4>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>Selecciona tu región</option>
                            <option value="1">Región de Arica y Parinacota</option>
                            <option value="2">Región de Tarapacá</option>
                            <option value="3">Región de Antofagasta</option>
                            <option value="4">Región de Atacama</option>
                            <option value="5">Región de Coquimbo</option>
                            <option value="6">Región de Valparaíso</option>
                            <option value="7">Región Metropolitana de Santiago</option>
                            <option value="8">Región del Libertador General Bernardo O’Higgins</option>
                            <option value="9">Región del Maule</option>
                            <option value="10">Región del Ñuble</option>
                            <option value="11">Región del Biobío</option>
                            <option value="12">Región de La Araucanía</option>
                            <option value="13">Región de Los Ríos</option>
                            <option value="14">Región de Los Lagos</option>
                            <option value="15">Región de Aysén del General Carlos Ibáñez del Campo</option>
                            <option value="16">Región de Magallanes y la Antártica Chilena</option>
                        </select>
                    </div>
                    <div class="col-sm-12 col-md4">
                        <input type="text" placeholder="Ciudad" class="mt-3" v-model="ciudad">
                        <input type="text" placeholder="Comuna" class="mx-4" v-model="comuna">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="my-5">
                            <label for="exampleFormControlTextarea1" class="form-label">Describe brevemente tu proyecto</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="descripcion"></textarea>
                            <div class="row my-4">
                                <div class="col-12 my-3">
                                    <h4>Dimensiones</h4>
                                </div>
                                <div class="col-sm-12 col-md-4">
                                    <label for="ancho"> mts2</label>
                                    <input type="text" id="ancho" class="ms-4" v-model="mts2">
                                </div>>
                            </div>
                            <div>
                                <h4>Datos de contacto</h4>
                                <div class="row my-2">
                                    <div class="col-3">
                                        <label for="Nombre" class="ms-4">Nombre</label>
                                    </div>
                                    <div class="col-6">
                                        <input type="text" id="Nombre" v-model="nombre">
                                    </div>
                                </div>
                                <div class="row my-2">
                                    <div class="col-3">
                                        <label for="email" class="ms-4">Email</label>
                                    </div>
                                    <div class="col-6">
                                        <input type="email" id="email" v-model="email">
                                    </div>
                                </div>
                                <div class="row my-2">
                                     <div class="col-3">
                                         <label for="fono" class="ms-4">N° de contacto    <span class="flecha">-----------></span> <strong>+569</strong></label>
                                     </div>
                                    <div class="col-6">
                                        <input type="text" id="fono" v-model="celular">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center my-5">
                        <button type="button" class="btn btn-success btn-lg">Enviar Solicitud</button>
                    </div>
                </div>
                
            </form>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Construir',
    data(){
        return {
            casa: '',
            galpon: '',
            quincho: '',
            terraza: '',
            piscina: '',
            jardin: '',
            value: '',
            ciudad: '',
            comuna: '',
            descripcion: '',
            mts2: '',
            nombre: '',
            email: '',
            celular: ''
        }
    },
}
</script>

<style scoped>
.flecha {
    color: white;
}
</style>