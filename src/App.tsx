import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { IData } from './types/types';
import { Basket } from './components/Basket';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState<IData[]>([])
  const [isCartOpen, setCartOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setCartOpen(false)
  }

  const cartOpen = () => {
    setCartOpen(!isCartOpen)
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data: IData[]) => setData(data))
  }, []);

  return (
    <>
      <Header cartOpen={cartOpen} />
      <Layout data={data} />
      <Basket 
      cartOpen = {isCartOpen}
      closeCart={toggleDrawer}
      />
      <Footer/>
    </>
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