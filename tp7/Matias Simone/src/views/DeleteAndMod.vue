<template>
    <div id="deleteAndMod">
        <h1>Borrar y Modificar</h1>
        <editAndDelete></editAndDelete>
    </div>
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