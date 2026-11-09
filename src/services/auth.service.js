import { api } from '@/boot/asxios'
export const login = (username, password) => {
    return api.post('/auth/login', { username, password })
}
export const getProfile = ()=> {
    return api.get('/profile')

}