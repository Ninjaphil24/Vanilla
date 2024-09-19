import App from "./App.js"
import router from "./router/index.js"

document.addEventListener('DOMContentLoaded', () => {
    router()
    window.addEventListener('hashchange', router)
})