const names : string[] = ["joy","roy"]

const number : number[] = [1,1,1,1]

// tuple
const destination : [string, number] = ["ads", 23]


const username: {
    firstName:string;
    middleName?:string;
    lastName:string;
} = {
    firstName: "sowrov",
    lastName: "nath"
}

const methodDeclaration = {
    balanace: 20,
    addBalance(tk:number):number{
        return methodDeclaration.balanace + tk
    }
}

console.log(methodDeclaration.addBalance(200))

const data = {
    name: "sowrov",
    roll:12,
    job:{
        company:"apidoxy",
        role:"developer",
        salary:1234
    }
}

// object destructuring 
const {job:{salary : tk}
} = data
console.log(tk)

// array destructuring 
const frnds = ["joy", "rou", "karim"]

const [a,b,c]= frnds
const [,x,y]= frnds
const [,,z]= frnds

console.log(a,b,c,x,y,z)

