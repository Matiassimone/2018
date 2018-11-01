<template>
  <div id="app">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <el-menu default-active="true" mode="horizontal" id="nav" :router="router" background-color="#0F0511" text-color="#fff" active-text-color="#42b883">
          <el-row type="flex" class="row-bg" justify="center">
            <el-menu-item index="/">Home</el-menu-item> 
            <el-menu-item index="/users">List Users</el-menu-item>  
            <el-menu-item index="/createUser">Create User</el-menu-item>  
            <el-menu-item index="/deleteAndMod">Borrar y Modificar</el-menu-item> 
          </el-row>
        </el-menu>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      activeIndex: true,
      router: true
    };
  }
}
</script>


<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color : #0F0511;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body{
  margin: 0px;
}

#nav a{
  text-decoration: none;
}
#nav {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

html {
  background-color: #F2F9F8;
}
</style>
