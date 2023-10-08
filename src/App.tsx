import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { IData } from './types/types';

function App() {
  const [data, setData] = useState<IData[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data:IData[]) => setData(data))
  }, []);

  return (
    <>
      <Header />
      <Layout data={data} />
    </>
  )
}

export default App;
