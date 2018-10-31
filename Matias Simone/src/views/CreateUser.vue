<template>
    <el-container id="createUser">
        <el-header><h1>Create User</h1></el-header>
        <el-main>
        <formUser></formUser>
        </el-main>
    </el-container>
</template>

<script>
import formUser from '@/components/ms-form.vue'

export default {
    name: 'createUser',
    components: {
        formUser
    }
}
</script>