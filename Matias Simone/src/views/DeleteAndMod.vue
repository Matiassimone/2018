<template>
    <el-container id="deleteAndMod">
        <el-header><h1>Borrar y Modificar</h1></el-header>
        <el-main>
        <editAndDelete></editAndDelete>
        </el-main>
    </el-container>
</template>

<script>
import editAndDelete from '@/components/ms-editAndDeleteUserCard.vue'

export default {
    name: 'deleteAndMod',
    components: {
        editAndDelete
    }
}
</script>