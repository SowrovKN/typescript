type TUser = {
    name: string
    contact: number
}

type TEmpleyoee ={
    role: string
    shift: string
}

type TPerson = TUser & TEmpleyoee

const person: TPerson = {
    name: "sowrov",
    contact: 123,
    role:"developer",
    shift:"night"
}

// interface
interface IUser {
    name:string
    contact:number
}

interface IPerson extends IUser{
    role:string
    shift:string
}
const user: IUser = {
    name: "sowrov",
    contact: 123
}

const person2: IPerson ={
    name:"sowrov",
    contact:123,
    role:"asdf",
    shift:"asdf"
}

