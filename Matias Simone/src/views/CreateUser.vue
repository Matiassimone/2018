<template>
    <div id="createUser">
        <h1>Create User</h1>
        <formUser></formUser>
    </div>
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