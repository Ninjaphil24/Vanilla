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