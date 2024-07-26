// function defineStore(id, storeSetup) {
//     const store = storeSetup()
//     store._id = id
//     return store
// }

function defineStore(id, storeSetup) {
    const state = storeSetup.state()
    const getters = storeSetup.getters
    const actions = storeSetup.actions

    const store = {
        _id: id,
        ...state
    }
    console.log('getters')
    console.log(getters)
    Object.defineProperty(store, 'doubleCount', {
        get() {
            return getters.doubleCount(store)
        }
    })

    store.increment = actions.increment.bind(store)

    return store

}

export { defineStore }