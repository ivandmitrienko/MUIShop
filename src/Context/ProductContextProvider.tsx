import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { IData } from '../types/types';
import { ProductContext } from './ProductContext';

interface IProductContextProvider {
  children: ReactNode
}
interface ILocalStorage {
  products: IData[] | []
}

const initProducts = {
  products: []
}

const getInitialState = () => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : initProducts;
}

export const ProductContextProvider = ({ children }: IProductContextProvider) => {
  const [products, setProductsToCart] = useState<ILocalStorage>(getInitialState)

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  }, [products])

  const addProduct = (product: IData) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: [...prev.products, {...product,count:1}]
    }
    ))
  }

  const removeProduct = (id:number) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: prev.products.filter((el) => el.id !== id)
    }))
  }

  return (
    <ProductContext.Provider value={{ addProduct, removeProduct, ...products }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)