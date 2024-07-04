import home from '../views/home.js'
import about from '../views/about.js'

let container = document.getElementById('container')
container.innerHTML = home
function router(id) {
    if (id == 'home') container.innerHTML = home
    else if (id == 'about') container.innerHTML = about
}

export default router