type AreaOfString = {
    height: string
    width: string
}

type AreaOfNumber = {
    [key in "height" | "width"] : string
}

type AreaByGenerics<T> = {
    [key in keyof AreaOfString] : T
}

const AreaByBoolean: AreaByGenerics<Boolean> = {
    height:true,
    width:false
}

/////////////////////////////

type AreaByGenerics1<T,A> = {
    [key in keyof T] : A
}

const AreaByBoolean1: AreaByGenerics1<{id:number, name:string}, number> = {
    id:123,
    name:23
}

////////////////////

type AreaByGenerics2<T> = {
    [key in keyof T] : T[key]
}

const AreaByBoolean2: AreaByGenerics2<{id:number, name:string}> = {
    id:123,
    name:"adsf"
}


// 
