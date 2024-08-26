function ref(initVal) {
    return {
        value: initVal
    }
}

function computed(getter) {
    return {
        get value() {
            return getter()
        }
    }
}

function data(initVal) {
    return new Proxy(initVal(), {
        get(target, property) {
            return target[property]
        },
        set(target, property, value) {
            target[property] = value
            return true
        }
    })
}

function createComponent(optionsObj) {
    const state = data(optionsObj.data)

    const computedProperties = {}
    if (optionsObj.computed) {
        for (let key in optionsObj.computed) {
            computedProperties[key] = computed(optionsObj.computed[key].bind(state))
        }
    }

    const methods = optionsObj.methods
    for (let methodKey in methods) {
        methods[methodKey] = methods[methodKey].bind(state)
    }
    return { state, computed: computedProperties, methods }
}

function reactive(initVal) {
    return new Proxy(initVal, {
        get(target, property) {
            return target[property]
        },
        set(target, property, value) {
            target[property] = value
            return true
        }
    })
}

export { ref, computed, createComponent, reactive }