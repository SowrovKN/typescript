const roles = {
    Admin:"Admin",
    Editor:"Editor",
    Viewer:"Viewer"
} as const




enum Roles33 {
    Admin = "Admin",
    Editor = "Editor"
}

type Roles44 = "Admin" | "Editor"

const canEditEnum = (role: Roles33) => {
    if(role === Roles33.Admin || role === Roles33.Editor){
        return true
    }else return false
}
const canEditType = (role: Roles44) =>{
    if(role === "Admin" || role === "Editor"){
        return true
    }else return false
}





const canEdit = (role: keyof typeof roles) =>{
    if(role === roles.Admin || role === roles.Editor){
        return true
    }else return false
}


// when key value mismatched

const roles1 = {
    Admin:"parbe",
    Editor:"ap",
    Viewer:"ljk"
} as const

const canEdit1 = (role: typeof roles1[keyof typeof roles1]) =>{
    if(role === roles1.Admin || role === roles1.Editor){
        return true
    }else return false
}