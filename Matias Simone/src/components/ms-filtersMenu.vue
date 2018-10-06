<template>
    <div>
        <br><br>
        <label for="filterMenu">Opciones de listado </label>
        <select v-model="typeList" name="filterMenu">
            <option disabled value="">Seleccione un Filtro</option>
            <option>Sin filtro</option>
            <option value="Masculino">Filtrar solo Masculinos</option>
            <option value="Femenino">Filtrar solo Femeninos</option>
            <option value="Otro">Filtrar solo Otros</option>
        </select>
        <br><br>
        <button @click="filter()">Filtrar</button>
    </div>
</template>
<script>
export default {

    name: 'filtersMenu',

    data() {
        return {
            typeList: ""
        }
    },

    methods: {
        filter() {
            this.$emit('filt', this.typeList);
        }
    }
}
</script>