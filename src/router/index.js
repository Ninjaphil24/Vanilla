import home from '../views/home.js'
import about from '../views/about.js'

// container.innerHTML = home
const routes = {
    '/': home,
    '/about': about
}

function router() {
    let shadowDOM = document.querySelector('router-view')
    let container = shadowDOM.shadowRoot.getElementById('container')
    let path = window.location.hash.replace('#', '') || '/'
    let content = routes[path]
    container.innerHTML = content.render() || home
}

export default router