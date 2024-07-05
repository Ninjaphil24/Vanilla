import home from '../views/home.js'
import about from '../views/about.js'

// container.innerHTML = home
const routes = {
    '#home': home,
    '#about': about
}

function router() {
    let container = document.getElementById('container')
    let path = window.location.hash
    let content = routes[path]
    container.innerHTML = content.render() || home
}

export default router