const unique = document.getElementById('unique')
console.log(unique)

function randomColor() {
    let color = '#'
    const letters = '0123456789abcdef'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
let slot = []
let btn = []

for (let i = 0; i < 2; i++) {
    const outerBG = randomColor()
    const innerBG = randomColor()
    const slotColor = randomColor()
    const btnColor = randomColor()
    const btnFont = randomColor()
    const elems = `
        <div class="outer" style="background-color: ${outerBG}">
            <div class="inner" style="background-color: ${innerBG}">
                <div class="slot" style="color: ${slotColor}"></div>
                <button class="btn" style="background-color: ${btnColor}; color: ${btnFont}">Click</button>
            </div>
        </div>
    `
    unique.innerHTML += elems
    requestAnimationFrame(() => {
        slot[i] = document.getElementsByClassName('slot')[i]
        btn[i] = document.getElementsByClassName('btn')[i]
        btn[i].addEventListener('click', () => alert(`Slot ${i}`))
    })
}


const div1 = document.createElement('div')
div1.classList = 'slot'
div1.classList.add('slotStyle')

const div1Clone = div1.cloneNode(true)

