const user = <T extends {id:number, name:string}> (studentInfo: T) => {
    return {
        course:"next level",
        ...studentInfo
    }
}

const sowrov = {
    name:"sowrov",
    status:"asdf",
    id:123
}
console.log(user(sowrov));
