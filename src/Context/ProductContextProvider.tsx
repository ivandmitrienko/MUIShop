import { ProductContext } from './ProductContext';

import { IData } from '../types/types';

import React, { ReactNode, useContext, useEffect, useState } from 'react';

interface IProductContextProvider {
  children: ReactNode
}
interface ILocalStorage {
  products: IData[] | []
}

const initProducts = {
  products: [],
};

const getInitialState = () => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : initProducts;
};

export const ProductContextProvider = ({ children }: IProductContextProvider) => {
  const [products, setProductsToCart] = useState<ILocalStorage>(getInitialState);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: IData) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: [...prev.products, { ...product, count: 1 }],
    }
    ));
  };

  const removeProduct = (id: number) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: prev.products.filter((el) => el.id !== id),
    }));
  };

  const addCountOfProduct = (id: number) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: prev.products.map((el) => el.id === id ? { ...el, count: Number(el.count) + 1 } : { ...el }),
    }));
  };

  const removeCountOfProduct = (id: number) => {
    setProductsToCart((prev) => ({
      ...prev,
      products: 
      prev.products
        .map((el) => el.id === id && (Number(el.count) > 1) ? 
          { ...el, count: Number(el.count) - 1 } : 
          { ...el }),
    }));
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        removeProduct,
        addCountOfProduct,
        removeCountOfProduct,
        ...products,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);