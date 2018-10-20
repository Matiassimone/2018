<template>
    <div>
        <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>

        <label for="nombre">Nombre </label>
        <input type="text" v-model="persona.nombre" placeholder="Introduzca su Nombre." name="nombre">
        <br><br>
        <label for="apellido">Apellido </label>
        <input type="text" v-model="persona.apellido" placeholder="Introduzca su Apellido." name="apellido">
        <br><br>
        <label for="edad">Edad </label>
        <input type="number" v-model.number="persona.edad" name="edad" min="0">
        <br><br>
        <label for="sexo">Sexo </label>
        <select v-model="persona.sexo" name="sexo">
            <option disabled></option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
        </select>
        <br><br>
        <button @click="checkForm()">Agregar usuario</button>
    </div>
</template>

<script>
import PersonService from '@/services/personService'

    export default {

        name : 'formUser',

        data() {
            return{
                errors: [],
                persona: {
                    nombre: "",
                    apellido: "",
                    sexo: "",
                    edad: 0
                },
                toSave: {
                    nombre: "",
                    apellido: "",
                    sexo: "",
                    edad: 0
                }
            }
        },
        methods : {
            checkForm : function () {
                if (this.persona.nombre && this.persona.apellido && this.persona.sexo && this.persona.edad && this.persona.edad<150 && this.persona.edad>0) {

                    this.errors = [];
                    
                    this.toSave.nombre = this.persona.nombre;
                    this.toSave.apellido = this.persona.apellido;
                    this.toSave.sexo = this.persona.sexo;
                    this.toSave.edad = this.persona.edad;

                    PersonService.save(this.toSave.nombre, this.toSave.apellido, this.toSave.sexo, this.toSave.edad);

                    this.persona = {};

                } else {

                    this.errors = [];

                    if (!this.persona.nombre) {
                        this.errors.push('Nombre requerido');
                    }
                    if (!this.persona.apellido) {
                        this.errors.push('Apellido requerido');
                    }
                    if (!this.persona.sexo) {
                        this.errors.push('Sexo requerido');
                    }
                    if (!this.persona.edad) {
                        this.errors.push('Edad requerida');
                    }
                    if (this.persona.edad > 150 || this.persona.edad < 0) {
                        this.errors.push('Edad invalida');
                    }
                }
            }
        }
    }
</script>