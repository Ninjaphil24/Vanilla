function classic() {
    return "Hello from Classic"
}

const Arrow = () => "Hello from Arrow"

const Obj = {
    objClassic: function () { return "Hello from Obj Classic" },
    objArrow: () => "Hello from Obj Arrow",
    get objGetter() {
        return "Hello from Obj Getter"
    }
}

const spreadObj = {
    ...Obj,
    name: "Spread"
}

Object.defineProperty(spreadObj, "date", { value: "Jan 1st", enumerable: true })

// console.log(classic())
// console.log(Arrow())
// console.log(Obj.objClassic())
// console.log(Obj.objArrow())
// console.log(Obj.objGetter)
console.log(Obj)
console.log(spreadObj)