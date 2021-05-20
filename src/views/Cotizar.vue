<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 mx-auto my-4">
                <h1>Cotiza tu proyecto</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-6 mx-auto my-auto">
                <h4 class="my-3">Que deseas hacer?</h4>
                <form action="">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @click="$router.push({name:'Construir'})">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Construir un nuevo recinto
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @click="$router.push({name:'Construir'})">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Ampliar un recinto ya existente
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked v-model="remodelarC">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Remodelar un recinto de tu hogar
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked v-model="remodelarL">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Remodelar Local Comercial
                        </label>
                    </div>
                </form>
            </div>
            <div class="col-sm-none col-md-6">
                <img src="https://www.brv-arquitectura.com.ar/wp-content/uploads/2019/08/remodelacion-de-casas-1024x768-1024x585.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cotizar', 
}
</script>

<style scoped>
img {
    width: 90%;
    height: 90%;
}
</style>