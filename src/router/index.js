import home from '../views/home.js'
import about from '../views/about.js'

// container.innerHTML = home
const routes = {
    '/': home,
    '/about': about
}

function router() {
    let container = document.getElementById('container')
    let path = window.location.hash.replace('#', '') || '/'
    let content = routes[path]
    container.innerHTML = content.render() || home
    const template = document.querySelector('#template-route')
    let clone = template.content.cloneNode(true)
    container.appendChild(clone)

}

export default router