const first = document.getElementsByClassName('first')[0]
console.log(first)
first.style.color = 'red'
first.style.fontSize = '40px'

const unique = document.getElementById('unique1')
console.log(unique)
unique.classList = 'second'

const unique2 = document.getElementById('unique2')
console.log(unique2)
const unique3 = document.getElementById('unique3')
console.log(unique3)

const div1 = document.createElement('div')
div1.classList = 'slot'
div1.classList.add('slotStyle')

const div1Clone = div1.cloneNode(true)

unique2.appendChild(div1)
unique3.appendChild(div1Clone)