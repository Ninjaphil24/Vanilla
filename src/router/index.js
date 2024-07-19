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
    container.innerHTML = ""
    container.appendChild(content.render())

}

export default router