<template>
    <div class="q-pa-md"></div>
    <q-btn label="save" @click="saveNote"></q-btn>
</template>
<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar()
const saveNote = () => {
    $q.notify({
        type:'negative',
        message: 'Save completed',
        position: 'top-right',
        timeout: 2000,
        icon: 'print'
    })
}
</script>