type Tuser = {
    name: string
    roll: number
    class: string
}

type TProduct = {
    id: number;
    name: string;
    price:number;
    discount?: number
}


const user: Tuser = {
    name:"soro",
    roll:12,
    class:"adf"
}

const product: TProduct = {
    id:12,
    name:"adf",
    price:12,
}

let status: "success" | "err" | "loading"

// const getMessage = (status : "success" | "err" | "loading") : string  =>{
//     if()
// }

function sum (num1: number, num2:number) : number {
    return num1 + num2
}

const arr1: number[] = [1,3,5]
const arr2: number[] = [2,4,6]

const finalArry = [...arr1 ,...arr2] // spread operator


const obj1: {
  name: string;
} = {
  name: "adfasf",
};

const obj2 ={
    roll: 123
}

const margedObj = {
    ...obj1, ...obj2
}


// function rest(arr:number[]) {
//     arr.reduce((sum,current) => sum + current)
// }

function rest(...perams : number[]){
    return perams.reduce((sum, current) => sum + current,0)
}


const arr: number[] = [1,2,3]

const [,,b] = arr

//union type
function printId(id: number | string){
    if(typeof id === "number"){
        return("adfaa")
    }else{
        return("str")
    }
}

console.log(printId("2"))

// intersectin
type TPerson = {
    name:string
}
type TEmployee = {
    role:string
    salary?:number
}

type TStaff = TPerson & TEmployee

const man:TStaff = {
    name: "sowrv",
    role: "developer",
}