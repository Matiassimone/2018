<template>
    <div>
        <ul>
            <li v-for="(persona, index) in personas" :key="index">
                <button @click="borrarPersona(persona.id)">Borrar</button> - 
                <button @click="editarPersona(persona.id)">Editar</button>  
                {{ persona.nombre }} {{ persona.apellido }} - {{ persona.sexo}} - {{persona.edad}}
                <hr>
            </li>
        </ul>

        <div id="openModal" class="modalDialog">
            <div>
                <a href="#close" title="Close" class="close" @click="CloseModal()">X</a>

                <h2>Editar</h2>

                <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>

                <label for="nombre">Nombre </label>
                <input type="text" v-model="personaForm.nombre" placeholder="Introduzca su Nombre." name="nombre">
                <br><br>
                <label for="apellido">Apellido </label>
                <input type="text" v-model="personaForm.apellido" placeholder="Introduzca su Apellido." name="apellido">
                <br><br>
                <label for="edad">Edad </label>
                <input type="number" v-model.number="personaForm.edad" name="edad" min="0">
                <br><br>
                <label for="sexo">Sexo </label>
                <select v-model="personaForm.sexo" name="sexo">
                    <option disabled></option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                <br><br>
                <button @click="checkForm()">Editar Usuario</button>
            </div>
        </div>
    </div>
</template>
<script>
import PersonService from '@/services/personService'

export default {

    name: 'editAndDelete',

    data() {
        return {
            personas: [],
            errors: [],
            personaForm: {
                nombre: "",
                apellido: "",
                sexo: "",
                edad: 0,
                id: 0
            },
            idToChange: 0
        }
    },

    created(){
         this.personas = PersonService.getAll();
    },

    methods: {

        borrarPersona(id) {
            let borrar = this.personas.find(person => person.id === id);
            let index = this.personas.indexOf(borrar);
            this.personas.splice(index, 1);

            PersonService.saveAll(this.personas);
        },

        editarPersona(id) {
            this.idToChange = id;
            document.getElementById('openModal').style.display = 'block'; 
        },

        CloseModal() {
            document.getElementById('openModal').style.display = 'none';
        },

        checkForm : function () {
            if (this.personaForm.nombre && this.personaForm.apellido && this.personaForm.sexo && this.personaForm.edad && this.personaForm.edad<150 && this.personaForm.edad>0) {

                this.errors = [];
                
                this.personaForm.id = this.idToChange;
                PersonService.change(this.personaForm);

                this.CloseModal();
                this.personaForm = {};
                this.reList();
                

            } else {

                this.errors = [];

                if (!this.personaForm.nombre) {
                    this.errors.push(' - Nombre requerido');
                }
                if (!this.personaForm.apellido) {
                    this.errors.push(' - Apellido requerido');
                }
                if (!this.personaForm.sexo) {
                    this.errors.push(' - Sexo requerido');
                }
                if (!this.personaForm.edad) {
                    this.errors.push(' - Edad requerida');
                }
                if (this.personaForm.edad > 150 || this.personaForm.edad < 0) {
                    this.errors.push(' - Edad invalida');
                }
            }
        },

        reList : function(){
            this.personas = PersonService.getAll();
        }      
    }
}
</script>

<style>

ul {
  list-style: none;
}

.modalDialog {
	position: fixed;
	font-family: Arial, Helvetica, sans-serif;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 99999;
	display:none;
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: auto;
}

.modalDialog > div {
	width: 400px;
	position: relative;
	margin: 10% auto;
	padding: 5px 20px 13px 20px;
	border-radius: 10px;
	background: #fff;
	background: -moz-linear-gradient(#fff, #999);
	background: -webkit-linear-gradient(#fff, #999);
	background: -o-linear-gradient(#fff, #999);
  -webkit-transition: opacity 400ms ease-in;
-moz-transition: opacity 400ms ease-in;
transition: opacity 400ms ease-in;
}

.close {
	background: #606061;
	color: #FFFFFF;
	line-height: 25px;
	position: absolute;
	right: -12px;
	text-align: center;
	top: -10px;
	width: 24px;
	text-decoration: none;
	font-weight: bold;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	-moz-box-shadow: 1px 1px 3px #000;
	-webkit-box-shadow: 1px 1px 3px #000;
	box-shadow: 1px 1px 3px #000;
}

.close:hover { background: #00d9ff; }

</style>