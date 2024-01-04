import React, { ReactNode, useContext, useState } from 'react';
import { IData, productID } from '../types/types';
import { ProductContext } from './ProductContext';

interface IProductContextProvider {
  children: ReactNode
}
interface ILocalStorage {
  products: IData[] | []
}

const getInitialState = () => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
}

export const ProductContextProvider = ({ children }: IProductContextProvider) => {
  const [products, setProductsToCart] = useState<ILocalStorage>(getInitialState)
  
  const addProduct = (product: IData) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: [...prev.products, product]
    }))
    console.log('fuck')
  }

  const removeProduct = ({id}:productID) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: prev.products.filter((el)=>el.id!==id)
    }))
  }

  return (
    <ProductContext.Provider value={{ addProduct, removeProduct, ...products }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () =>useContext(ProductContext)