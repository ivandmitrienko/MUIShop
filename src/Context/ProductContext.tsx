import { createContext } from "react";
import { IData, productID } from "../types/types";

interface IContext {
    addProduct: (product:IData) => void,
    removeProduct: ({id}:productID) => void,
    products: IData[]
}

export const ProductContext = createContext<IContext>({} as IContext)