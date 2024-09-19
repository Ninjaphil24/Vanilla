function defineStore(id, storeSetup) {
    if (id == 'counterComp' || id == 'config') {
        const store = storeSetup()
        store._id = id
        return store
    } else if (id == 'counterOpt') {
        const state = storeSetup.state()
        const getters = storeSetup.getters
        const actions = storeSetup.actions

        const store = {
            _id: id,
            ...state
        }
        Object.defineProperty(store, 'doubleCount', {
            get() {
                return getters.doubleCount(store)
            }
        })

        store.increment = actions.increment.bind(store)

        return store

    }
}
export { defineStore }