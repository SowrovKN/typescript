const user = <T extends {id:number, name:string}> (studentInfo: T) => {
    return {
        course:"next level",
        ...studentInfo
    }
}

const sowrov = {
    name:"sowrov",
    status:"asdf"
}
console.log(user(sowrov));
