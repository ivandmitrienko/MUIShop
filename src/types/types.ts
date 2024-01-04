export interface IData {
    id: number,
    title:string,
    price:string,
    category: string,
    description: string,
    image: string
}

export type productID =Pick<IData,"id">