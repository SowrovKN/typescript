type TGenerics<T> = Array<T>

const numbers: TGenerics<number> = [1,2,3]
const names: TGenerics<string> = ["asdf","asdf"]
const isAdmin: TGenerics<boolean> = [true, false]
const user1:TGenerics<{name:string; contact:number}> = [{name:"asdf", contact:123},{name:"asdf",contact:234}]
const arry: TGenerics<string[]> = [
    ["2"],["2"]
]


type user = { name: string; salary:number }

const obj: TGenerics<user> = [{
    name: "sor",
    salary: 123654
}]

type TCordinates<X,Y> = [X, Y]
const cordinates: TCordinates<number,string> = [2,"3"]
const cordinates1: TCordinates<string,string> = ["a",'as']
const cordinates2: TCordinates<{name:string; salary:number}, {role:string; qualification:string}> = [{name:"asdf", salary:123},{role:"asdf", qualification:"adsf"}]

type TObj<T> = T

const arr:TObj<[number, string]> =[1,"sd",] 
