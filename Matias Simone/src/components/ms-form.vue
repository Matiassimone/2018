<template>
    <el-row :gutter="10">
         
        <el-alert v-for="(error, index) in errors" :key="index" title="Alert : " type="warning" show-icon> 
            {{error}}
        </el-alert>
        <br><br>

        <el-form ref="form" :model="persona" label-width="120px">
            <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                <el-form-item label="Nombre">
                    <el-input v-model="persona.nombre" placeholder="Introduzca su Nombre." type="text"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                <el-form-item label="Apellido">
                    <el-input v-model="persona.apellido" placeholder="Introduzca su Apellido." type="text"></el-input>
                </el-form-item>
            </el-col>
            <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                <el-form-item label="Edad">
                    <el-input-number v-model.number="persona.edad" type="number" min = 0></el-input-number>
                </el-form-item>
            </el-col>
            <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                <el-form-item label="Sexo">
                    <el-select v-model="persona.sexo" name="filterMenu">
                        <el-option 
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <br><br>
            <el-col :xs="25" :sm="25" :md="25" :lg="25" :xl="25">
                <el-button @click="checkForm()">Agregar usuario</el-button>
            </el-col>
        </el-form>
    </el-row>
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
                },

                typeList: "",

                options: [{
                    value: '',
                    label: 'Seleccione el Sexo',
                    disabled: true
                }, {
                    value: 'Masculino',
                    label: 'Masculino'
                }, {
                    value: 'Femenino',
                    label: 'Femenino'
                }, {
                    value: 'Otro',
                    label: 'Otro'
                }],

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