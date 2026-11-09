<template>
    <h4>Note page</h4>
    <div v-for="value in notes" :key="value.id">
        <div>{{ value.id }} - {{ value.name }}
            <q-icon name="description" @click="viewNote(value)"></q-icon>
        </div>
    </div>
    <div>
       <q-btn color="primary" icon="check" label="OK" @click="$router"></q-btn>
    </div>
</template>
<script setup>
   import { ref } from 'vue';
   import { useRouter } from 'vue-router';
   const router = useRouter()
   const notes = ref([
    {id: 1, name: "Task1"},
    {id: 2, name: "Task2"},
   ])
   const viewNote = (item) => {
    router.push({
        name: 'NoteDetail',
        params: { id: item.id}
    })
}
</script>