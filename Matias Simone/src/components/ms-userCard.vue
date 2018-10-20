<template>
    <div>
        <ul>
            <li v-for="(persona, index) in personas" :key="index">
                {{ persona.nombre }} {{ persona.apellido }} - {{ persona.sexo}} - {{persona.edad}}
                <hr>
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

}
</script>

<style>
ul {
  list-style: none;
}
</style>