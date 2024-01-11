import { createContext } from "react";
import { IData, productID } from "../types/types";

interface IContext {
    addProduct: (product:IData) => void,
    removeProduct: productID,
    addCountOfProduct: productID,
    removeCountOfProduct: productID,
    products: IData[]
}

export const ProductContext = createContext<IContext>({} as IContext)