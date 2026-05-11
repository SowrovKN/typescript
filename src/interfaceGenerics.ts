interface Developer<T> {
    name:string;
    role:string;
    salary:number;
    device:{
        name: string;
        model:string;
        price:number
    }
    smartWatch: T
}

type TSowrovWatch = {
    name:string;
    model:string;
    price:number
}

type TRonyWatch = {
    name:string;
    model:string;
    price:number;
    features:{
        heartbeatRate:string;
        calling:string;
    }
}

const sowrov: Developer<TSowrovWatch> ={
    name:"sor",
    role:"dev",
    salary:123,
    device:{
        name:"afds",
        model:"asdf",
        price:123
    },
    smartWatch:{
        name:"asdf",
        model:"adf",
        price:123
    }
}

const rony: Developer<TRonyWatch> ={
    name:"sor",
    role:"deve",
    salary:123,
    device:{
        name:"afds",
        model:"asdf",
        price:123
    },
    smartWatch:{
        name:"asdf",
        model:"adf",
        price:123,
        features:{
            heartbeatRate:'asdf',
            calling:"adf"
        }
    }
}