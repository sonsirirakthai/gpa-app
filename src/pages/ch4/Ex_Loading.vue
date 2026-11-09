<template>
    <div class="q-pa-md">
        <q-btn label="Load data" @click="loadData"></q-btn>
    </div>
</template>
<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar()
const loadData = () => {
    $q.loading.show()
//    $q.loading.show({
//        spinner: null,
//        message: `<div class= 'text-c'>
////
//            <img src= 'https://media.tenor.com/aGj-frNYMFEAAAAM/cat-cat-dance.gif'
//            style='width : 150px; height: 150px; broder-redius: 8px;'>
//            <div class='q-mt-md text-h6'>เเมวกำลังโหลด...</div>
 //           </div> `,
//            html: true,
//            backgroundColor: 'dark',
//            messageColor: 'white'
//    })
 //   $q.loading.show({
 //        message: 'Loading data...',
//         spinner: QSpinnerFacebook,
//         spinnerColor: 'yellow',
//         spinnerSize: 200,
//         backgroundColor: 'purple-2',
//         messageColor: 'blue'
//        })
    setTimeout(()=>{
        $q.loading.hide()
        $q.notify({ type: 'positive',
            message: 'Load data success'
        })
    }, 5000)
}
</script>