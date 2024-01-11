export interface IData {
    id: number,
    title:string,
    price:string,
    category: string,
    description: string,
    image: string,
    count?:number
}

export type productID = (id: number) => void