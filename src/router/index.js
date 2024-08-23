import home from '../views/home.js'
import about from '../views/about.js'
import ReactiveView from '../views/ReactiveView.js'
import PlaygroundView from '../views/PlaygroundView.js'
import VBindView from '../views/VBindView.js'

// container.innerHTML = home
const routes = {
    '/playground': PlaygroundView,
    '/': home,
    '/about': about,
    '/reactive': ReactiveView,
    '/vbind': VBindView
}

function router() {
    let container = document.getElementById('container')
    let path = window.location.hash.replace('#', '') || '/'
    let content = routes[path]
    container.innerHTML = ""
    container.appendChild(content.render())

}

export default router