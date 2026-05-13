const createArryWithString = (value: string) => [value]
const createArryWithNumber = (value: number) => [value]
const createArryWithObj = (value: {id:string; name:string}) => [value]

console.log(createArryWithString("asf"))
console.log(createArryWithNumber(123))
console.log(createArryWithObj({id:"so", name:"sdaf"}))

const genericFunciton = <T>(value:T) => [value]

genericFunciton("str")
genericFunciton(12)
genericFunciton(false)

const adding = <X,Y> (param1:X, param2:Y) => {
    return [param1, param2]
}

console.log(adding(1223,"ads"))