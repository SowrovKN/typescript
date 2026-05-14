type Product = {
    id:number
    name: string
    price: number
    stock: number 
    color: string
}

type ProductSummary = Pick<Product, "id" | "name" | "price">
type Stock = Omit<Product,"id" | "name" |"price" | "color">