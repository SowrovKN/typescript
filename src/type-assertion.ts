let value: unknown = "500";

function task5(){
const str =Number((value as string)) + 100
// const num = Number(str) + 100
// console.log(str)
}

task5()

let value1: unknown = "str";
const length = (value1 as string).length
const lastCha = (value1 as string).charAt(length)
// console.log(lastCha)


const num: unknown = 50

const result = ((num as number) + 25)/2
// console.log(result).

const product: unknown = {
    title:"asdf",
    price:123
}

const objType = product as {
    title: string,
    price:number
}

console.log(objType.title)


const user: unknown ={
    name:"store",
    gender:"male"
}

const userData = user as { name: string, gender:string}
console.log(userData.gender)