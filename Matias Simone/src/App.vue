<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <formUser @addNewPersona="addNewPersona"></formUser>
        <filtersMenu @filt="filt"></filtersMenu>
        <userCard :personas= filtrar @borrarPersona="borrarPersona"></userCard>
    </div>
</template>
<script>
import formUser from './components/ms-form.vue'
import userCard from './components/ms-userCard.vue'
import filtersMenu from './components/ms-filtersMenu.vue'

export default {
    name: 'app',
    components: {
        formUser,
        userCard,
        filtersMenu
    },

    data() {
        return {

            personas: [],
            idInicial: 0,
            typeListar: ""
        }
    },
    computed: {

        filtrar: function() {

            let personasFiltradas;

            if (this.typeListar == "Sin filtro" || this.typeListar == "") {

                personasFiltradas = this.personas

            } else {

                personasFiltradas = this.personas.filter(persona => persona.sexo === this.typeListar);
            }

            return personasFiltradas;
        }
    },
    methods: {
        addNewPersona(toEmit) {
            this.personas.push({
                id: ++this.idInicial,
                nombre: toEmit.nombre,
                apellido: toEmit.apellido,
                edad: toEmit.edad,
                sexo: toEmit.sexo
            });
        },
        borrarPersona(id) {
            this.personas = this.personas.filter(persona => persona.id !== id);
        },
        filt(typeList){
            this.typeListar = typeList;
        }

    }

}
</script>