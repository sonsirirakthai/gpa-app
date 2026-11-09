import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/asxios'

export const useSubjectStore = defineStore('subjects' , () => {
    const subjects = ref([])
    async function fechtAll() {
        try{
            const res = await api.get('/subjects')
            subjects.value = res.data
        }catch (error) {
            console.error('Error:', error)
        }     
    }
    return { subjects,fechtAll }
})