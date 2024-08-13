function toUppercaseClosure(next) {
    return function (input) {
        next(input.toUpperCase())
    }
}

function print(input) {
    console.log(input)
}

const upperCased = toUppercaseClosure(print)

// upperCased("Hello")

const target = {
    message: "Hello from Proxy"
}

const handler = {
    get: function (target, property) {
        if (property in target) {
            return target[property]
        }
    },
    set(target, property, value) {
        if (typeof value === 'number') {
            target[property] = value
        } else {
            throw new TypeError(`Value ${value} is not a number.`)
        }
    }
}

const proxy = new Proxy(target, handler)


proxy.message = 3
console.log(proxy.message)