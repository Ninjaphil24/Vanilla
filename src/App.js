import RouterView from "./components/RouterView.js"
import RouterLink from "./components/RouterLink.js"
import HelloWorld from "./components/HelloWorld.js"

const nav = `
<template id="template-app">
<hello-world msg="Hello World"></hello-world>
<router-link></router-link>
<router-view></router-view>
</template>
`
const App = document.getElementById('app')
App.innerHTML = nav
const template = document.querySelector('#template-app')
let clone = template.content.cloneNode(true)
App.appendChild(clone)
export default App