import home from '/components/home.js'
import about from '/components/about.js'

let container = document.getElementById('container')
container.innerHTML = home
function showObject(id) {
    if (id == 'home') container.innerHTML = home
    else if (id == 'about') container.innerHTML = about
}

window.showObject = showObject