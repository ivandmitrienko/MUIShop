export interface IData {
    id: number,
    title:string,
    price:string,
    category: string,
    description: string,
    image: string,
    count?:number,
    handleClose: () => void
}

export type productID = (id: number) => void

export interface ISnackbar {
    open:boolean,
    handleClose:()=>void

}

export type IProps = {
    data: IData[],
    loading: boolean,
    handleClose: () => void
}