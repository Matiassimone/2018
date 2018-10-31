<template>
    <el-row :gutter="10">
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
                </el-card>
            </el-col>
        </div>
    </el-row>
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
    clear: both
  }

  .box-card {
    width: 150px;
    height: 150px;
    margin: 1vw;
    padding: 0.5vw;
  }
</style>