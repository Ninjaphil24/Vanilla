// function defineStore(id, storeSetup) {
//     const store = storeSetup()
//     store._id = id
//     return store
// }

function defineStore(id, storeSetup) {
    const state = storeSetup.state()
    const getters = storeSetup.getters
    const actions = storeSetup.actions

    console.log('state')
    console.log(state)

    const store = {
        _id: id,
        ...state
    }
    store.increment = actions.increment.bind(store)
    console.log('store')
    console.log(store)

    return store

}

export { defineStore }