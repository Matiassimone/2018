<template>
    <div>
        <ul>
            <li v-for="(persona, index) in personas" :key="index">
                <a @click="borrarPersona(persona.id)"> {{ persona.nombre }} {{ persona.apellido }} - {{ persona.sexo}} - {{persona.edad}}</a>
            </li>
        </ul>
    </div>
</template>
<script>

export default {

    name: 'userCard',

    props: {
    	personas : Array
    },

    methods: {
        borrarPersona(id) {
        	this.$emit('borrarPersona',id);
        }
    }
}
</script>