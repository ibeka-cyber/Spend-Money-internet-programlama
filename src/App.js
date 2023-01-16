
import './App.css';
import { useState,useEffect } from 'react';
import Header  from './components/Header';
import products from './products';
import Product from './components/Product';
import Basket from './components/Basket';

function App() {
  const [mmoney]=useState(10000000000); //paramızın değeri
  const [basket,setBasket]=useState([]);
  const [total,setTotal]=useState(0); //sepet değiştiğinde total değeri hesaplamak için 

//basket resetleme fonksiyonu
  const resetBasket = () => {
    setBasket([]);
  }
  
  
  //sepette değişiklik olduğunda görmek için yazdığmız useEffect() kodu
  useEffect(() =>{
  setTotal(basket.reduce((acc,item) => {
    return acc + (item.amount *(products.find(product=>product.id===item.id).price) )
   },0))
  },[basket])

  return (
    <>
   
   <Header total={total} money={mmoney}/> 
   
   
 <div id ="dis" className="container products">
 {products.map(product => ( //product.map ile  productları döndürdük.
  <Product key={product.id} total={total} money={mmoney}  product={product} basket={basket} setBasket={setBasket} />
   
    ))}
    </div>
    <Basket products={products} basket={basket} total={total} resetBasket={resetBasket} />
    
    </>
  );
}

export default App;
