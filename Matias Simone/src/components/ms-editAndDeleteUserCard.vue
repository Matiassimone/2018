<template>
    <div>   
        <div v-for="(persona, index) in personas" :key="index">
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{ persona.nombre }} {{ persona.apellido }}</span>
                    </div>
                    <div class="text item">
                        Sexo : {{ persona.sexo}}
                        <br><br>
                        Edad : {{persona.edad}}
                    </div>
                    <div>
                        <el-button @click="borrarPersona(persona.id)">Borrar</el-button>
                        <el-button @click="editarPersona(persona.id)">Editar</el-button>
                    </div>
                </el-card>
            </el-col>
        </div>
 
            <div id="openModal" class="modalDialog">
                <div>
                    <a href="#close" title="Close" class="close" @click="CloseModal()">X</a>
                    <h2>Editar</h2>

                    <el-row :gutter="10">
                        <el-alert v-for="(error, index) in errors" :key="index" title="Alert : " type="warning" show-icon> 
                            {{error}}
                        </el-alert>

                        <br><br>

                        <el-form ref="form" :model="personaForm" label-width="120px">
                            <el-row :gutter="10">
                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                    <el-form-item label="Nombre">
                                        <el-input v-model="personaForm.nombre" placeholder="Introduzca su Nombre." type="text"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <br><br>

                            <el-row :gutter="10">
                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                    <el-form-item label="Apellido">
                                        <el-input v-model="personaForm.apellido" placeholder="Introduzca su Apellido." type="text"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <br><br>

                            <el-row :gutter="10">
                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                    <el-form-item label="Edad">
                                        <el-input v-model.number="personaForm.edad" type="number" min="0"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <br><br>

                            <el-row :gutter="10">
                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                    <el-form-item label="Sexo">
                                        <el-select v-model="personaForm.sexo" name="filterMenu">
                                            <el-option class="front" 
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                :disabled="item.disabled">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <br><br>

                            <el-row :gutter="10">
                                <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                                    <el-button @click="checkForm()">Editar Usuario</el-button>
                                </el-col>
                            </el-row>
                        </el-form> 
                    </el-row>
                </div>
            </div>

        </div>
</template>

<script>
import PersonService from "@/services/personService";

export default {
  name: "editAndDelete",

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

      idToChange: 0,

      typeList: "",

      options: [
        {
          value: "",
          label: "Seleccione el Sexo",
          disabled: true
        },
        {
          value: "Masculino",
          label: "Masculino"
        },
        {
          value: "Femenino",
          label: "Femenino"
        },
        {
          value: "Otro",
          label: "Otro"
        }
      ]
    };
  },

  created() {
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
      document.getElementById("openModal").style.display = "block";
    },

    CloseModal() {
      document.getElementById("openModal").style.display = "none";
    },

    checkForm: function() {
      if (
        this.personaForm.nombre &&
        this.personaForm.apellido &&
        this.personaForm.sexo &&
        this.personaForm.edad &&
        this.personaForm.edad < 150 &&
        this.personaForm.edad > 0
      ) {
        this.errors = [];

        this.personaForm.id = this.idToChange;
        PersonService.change(this.personaForm);

        this.CloseModal();
        this.personaForm = {};
        this.reList();
      } else {
        this.errors = [];

        if (!this.personaForm.nombre) {
          this.errors.push(" - Nombre requerido");
        }
        if (!this.personaForm.apellido) {
          this.errors.push(" - Apellido requerido");
        }
        if (!this.personaForm.sexo) {
          this.errors.push(" - Sexo requerido");
        }
        if (!this.personaForm.edad) {
          this.errors.push(" - Edad requerida");
        }
        if (this.personaForm.edad > 150 || this.personaForm.edad < 0) {
          this.errors.push(" - Edad invalida");
        }
      }
    },

    reList: function() {
      this.personas = PersonService.getAll();
    }
  }
};
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
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: none;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: auto;
  overflow: scroll;
}
.front {
  z-index: 3;
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
  color: #ffffff;
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

.close:hover {
  background: #00d9ff;
}

.text {
  font-size: 14px;
  text-align: left;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 330px;
  height: 200px;
  margin: 1vw;
  padding: 0.5vw;
}
</style>