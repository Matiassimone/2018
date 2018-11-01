<template>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
            <el-select v-model="typeList" name="filterMenu">
                <el-option 
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="3">
            <el-button @click="filter()">Filtrar</el-button>
        </el-col>
    </el-row>
</template>
<script>
export default {

    name: 'filtersMenu',

    data() {

        return {
            typeList: "",

            options: [{
                value: ' ',
                label: 'Seleccione un Filtro',
                disabled: true
            }, {
                value: '',
                label: 'Sin filtro'
            }, {
                value: 'Masculino',
                label: 'Filtrar solo Masculinos'
            }, {
                value: 'Femenino',
                label: 'Filtrar solo Femeninos'
            }, {
                value: 'Otro',
                label: 'Filtrar solo Otros'
            }],
        }
    },

    methods: {
        filter() {
            this.$emit('filt', this.typeList);
        }
    }
}
</script>