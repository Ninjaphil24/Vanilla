function defineStore(id, storeSetup) {
    const store = storeSetup()
    store._id = id
    return store
}

export { defineStore }