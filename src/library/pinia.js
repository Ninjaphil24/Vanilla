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

    }
}

export { defineStore }