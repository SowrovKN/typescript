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