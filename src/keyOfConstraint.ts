type RichPeopleVehile = {
    car:string;
    bike:string;
    cng:string;
}

type PoorPeopleVehiles1 = "car" | "bike" | "cng"

type PoorPeopleVehiles2 = keyof RichPeopleVehile

const sowrov : PoorPeopleVehiles2 = "bike"

///////////////////////////////////////////////

const getValue =<T> (obj:T, key: keyof T ) =>{
    return obj[key]
}

type Student = {
    name: string;
    roll:number
}

const student1: Student = {
    name: "sowrov",
    roll:123
}
const student = getValue(student1, "name")
console.log(student)