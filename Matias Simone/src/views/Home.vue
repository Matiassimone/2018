<template>
  <el-container class="home">
    <el-header><h1>TP-7 AWESOME!</h1></el-header>
    <el-main>
      <img alt="Vue logo" src="../assets/logo.png" id="logo">
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'home',
}
</script>
 
 <style>
#logo {
    -webkit-animation: rotation 3s infinite linear;
}

@-webkit-keyframes rotation {
	from {
		-webkit-transform: rotate(0deg);
	}
	to {
	    -webkit-transform: rotate(359deg);
	}
}
 </style>