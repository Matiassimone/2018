<template>
    <el-container id="users">
        <el-header><h1>Users</h1></el-header>
        <el-main>
            <filtersMenu @filt="filt"></filtersMenu>
            <userCard :personas= filtrar></userCard>
        </el-main>
    </el-container>
</template>

<script>
import userCard from '@/components/ms-userCard.vue'
import filtersMenu from '@/components/ms-filtersMenu.vue'
import PersonService from '@/services/personService'

export default {
    name: 'users',
    components: {
        userCard,
        filtersMenu
    },

    data() {
        return {
            personas: [],
            typeListar: ""
        }
    },

    created(){
         this.personas = PersonService.getAll();
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
        filt(typeList){
            this.typeListar = typeList;
        }
    }
}
</script>