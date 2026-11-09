<template>
  <div class="q-ma-md">
    <q-btn color="primary" icon="add" 
    label="Increase count" @click="count++" />
    <q-btn color="secondary" label="Add score"
    @click="state.score++" />
    <q-input v-model="state.user.name" type="text" label="Edit your name"/>
    <div class="q-ma-md">
      <p>Count:{{ count }}</p>
      <p>Score:{{ state.score }}</p>
      <p>User name:{{ state.user.name }}</p>
    </div>

  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
watch(count, (newValue, oldValue) => {
  console.log(`chang count from ${oldValue} to ${newValue}`)
})
watch(
  ()=> StaticRange.value.score,
  (newValue)=> { console.log(` New score ${newValue}`)}
)
watch(
  ()=> StaticRange.value.score,
  (newUser)=> { console.log(`New user Object: ${JSON.stringify(newUser)}`)},
  {deep: true}
)
</script>
