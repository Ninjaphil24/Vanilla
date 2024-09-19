function person() {
    return {
        name: "Phil",
        lastName: "Mod",
        greet() {
            console.log(`Regular, my name is ${this.name} ${this.lastName}!`)
        }
    }
}

const personGet = {
    name: "Phil",
    lastName: "Mod",
    get greet() {
        console.log(`Getter, my name is ${this.name} ${this.lastName}!`)
    }
}

person().greet()
personGet.greet