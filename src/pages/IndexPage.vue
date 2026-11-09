<template>
  <q-page padding>
    <form @reset="onReset" @submit.prevent="onSubmit">
      <div class="q-gutter-md">
        <q-input  type="text" label="Your username" v-model="username"></q-input>
        <q-input type="email" label="Your email" v-model="email"
        @keyup.alt.enter="onReset"></q-input>
        <q-select v-model="role" :options="roleOption" label="Role"></q-select>
        <q-btn color="primary" type="submit" label="Submit" />
        <q-btn color="grey" icon="reset" label="RESET" />
      </div>
    </form>
    <!-- <ul>
      <li v-for="(item, index) in items" :key="index">
        {{index+1}}. {{ item.name }} - {{ item.price }} Baht
      </li>
    </ul> -->
    <!-- <div v-if="islogged"> Welcom </div>
    <div v-else>Please Login</div>
    <div v-if = "score >= 80 ">Excellent</div>
    <div v-else-if ="score >= 50"> Pass</div>
    <div v-else >Fail</div>
    <div v-show="isVisible">Show or Hide</div>
    <q-btn color="primary" :label="isVisible ? ' Hide' : 'Show'"
    @click="isVisible = !isVisible"/> -->
  </q-page>
</template>

<script setup>
import {  ref } from 'vue'
const username = ref('')
const email = ref('')
const role = ref(null)
const roleOption = ['Student','Teacher','Staff']
const onReset = () => {
  username.value = ""
  email.value = ""
  role.value = null
}
const onSubmit = () => {
  if(!username.value || !email.value){
    alert("Username or Email is empty")
    return
  }
  console.log("From was Submitted: ",{
    username: username.value,
    email: email.value,
    role: role.value
  })
  alert("Data Saved")
}
</script>
// const items = ref([
//   { name: 'ProductA', price: 100},
//   { name: 'ProductB', price: 200}
// ])
//
// const isVisible = ref (true)
// //import { useMeta } from 'quasar';
// const islogged = ref(true)
// const score = ref(80)
//
// const my_color = ref("yellow")
//const url = ref("/cat.jpg")
// const msg = ref("Hello")
// const isActive = ref(true)
//
//const msg =ref(1500)
//console.log(msg.value)
// Array
//const item = ref(['Apple','Banana',1100,25.5])
//item.value.push(100)
//console.log(item.value)
//Object
//const product = ref({
 // id: 1,
 // name: "NoteBook",
 // price: 15000
//})
//console.log(product.value)
//reactive
//const user = reactive({ name: "Jack" , age: 20})
//console.log(user.name, user.age)
//const {name, age} = toRefs(user)
//console.log(name.value,age.value)

