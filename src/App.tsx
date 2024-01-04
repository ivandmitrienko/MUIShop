import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { IData } from './types/types';
import { Basket } from './components/Basket';
import Footer from './components/Footer';
import { ProductContextProvider } from './Context/ProductContextProvider';

function App() {
  const [data, setData] = useState<IData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [isCartOpen, setCartOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setCartOpen(false)
  }

  const cartOpen = () => {
    setCartOpen(!isCartOpen)
  }

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data: IData[]) => setData(data))
      .finally(() => setLoading(false))
  }, []);

  return (
    <ProductContextProvider>
      <Header cartOpen={cartOpen} />
      <Layout data={data} loading={loading} />
      <Basket
        cartOpen={isCartOpen}
        closeCart={toggleDrawer}
      />
      <Footer />
    </ProductContextProvider>
  )
}

export default App;


// , {
//   mode: 'no-cors',
//     method: "get",
//       headers: {
//     "Content-Type": "application/json"
//   }
// }