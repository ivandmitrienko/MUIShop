import { createContext } from "react";
import { IData } from "../types/types";

interface IContext {
    addProduct: (product:IData) => void,
    removeProduct: (id:number) => void,
    products: IData[]
}

export const ProductContext = createContext<IContext>({} as IContext)