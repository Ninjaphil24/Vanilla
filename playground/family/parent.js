import { CardComponent } from './child.js'

const app = document.getElementById('app')
console.log(app)

const colors = {
    admin: {
        outerBg: 'red',
        innerBg: 'orange',
        btnText: "Admin's Click"
    },
    user: {
        outerBg: 'blue',
        innerBg: 'aqua',
        btnText: "Users's Click"
    },
    guest: {
        outerBg: 'yellow',
        innerBg: 'bisque',
        btnText: "Guest's Click"
    },
    btnColor: '#532abc',
    slotColor: 'white',
    btnFont: 'white',
}

const users = ['admin', 'user', 'guest']


users.forEach(user => {
    let userColor = colors[user]
    const component = document.createElement('card-component')
    component.setAttribute('outer-bg', userColor.outerBg)
    component.setAttribute('inner-bg', userColor.innerBg)
    component.setAttribute('button-text', userColor.btnText)
    component.setAttribute('btn-color', colors.btnColor)
    component.setAttribute('slot-color', colors.slotColor)
    component.setAttribute('btn-font', colors.btnFont)

    component.innerHTML = `Classification ${user}.`

    app.appendChild(component)
})