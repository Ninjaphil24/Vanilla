import RouterView from "./components/RouterView.js"
import RouterLink from "./components/RouterLink.js"
import HelloWorld from "./components/HelloWorld.js"

const nav = `
<hello-world msg="Hello World"></hello-world>
<nav>
    <router-link to="#/">Home</router-link>
    <router-link to="#/about">About</router-link>
</nav>
<router-view></router-view>
`
const App = document.getElementById('app').innerHTML = nav
export default App