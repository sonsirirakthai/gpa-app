import { createPinia } from "pinia";
import  piniaPiuginPersistedstate  from "pinia-plugin-persistedstate";

export default ({ app }) => {
    const pinia = createPinia()
    pinia.use(piniaPiuginPersistedstate)
    app.use(pinia)
}