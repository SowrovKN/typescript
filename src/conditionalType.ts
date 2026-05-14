type A = null
type B = number 

type C = A extends null ? string : boolean

type RichManVehile = {
    car: "car"
    bike: "bike"
    ship: "ship"
}

type CheckVehile<T> = T extends keyof RichManVehile ? true : false

