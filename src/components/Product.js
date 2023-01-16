import React from "react";
import { moneyFormat } from "../helpers";

function Product({product,basket,setBasket,total,money}){

    //Eklenilen ürün sayısını göstermek için, daha sonra basketItem'i span içinde çağırdık.
    const basketItem=basket.find(item =>item.id === product.id);
 
    //sepete ekleme metodunda ürünün daha önce eklenip eklmediğini kontrol ettik.
    const addBasket =() =>{
        const checkBasket = basket.find(item=>item.id===product.id);

        //ürün daha önce eklenmiş
        if(checkBasket){

            //eklenmişse sayacı 1 arttırdık ve baskete ekledik.
            checkBasket.amount+=1;
            setBasket([...basket.filter(item => item.id!==product.id),checkBasket]); //mevcut basketi ekle fakat o anki ürünü hariç tut ve checkBasketi ekle
        }
        else{
            //eklenmemişse sayacı 1'e eşitledik ve id değişkeninin ürünün değişkenine eşitledik.
            setBasket([...basket, {
                id:product.id,
                amount:1
            }]); //mevcut basketi ve istenilen ürünü ekle.
        }
    }

    //ürün almayla benzer şekilde ürün satma kodu 
    const removeBasket = () =>{
        const currentBasket = basket.find(item=>item.id===product.id);
        const basketWithoutCurrent=basket.filter(item => item.id!==product.id);
        currentBasket.amount-=1;
        if(currentBasket.amount===0){
            setBasket([...basketWithoutCurrent]);
        }else{
        setBasket([...basket.filter(item => item.id!==product.id),currentBasket]);
        }
       

    }
    return(
        <>
        <div className="product">
        <img src={product.image} alt=""/>
        <h6>{product.title}</h6>
        <div className="price">{moneyFormat(product.price)} ₺</div>
        <div className="actions">
            
        <button class="custom-btn btn-15" disabled={!basketItem} onClick={removeBasket}>Sat</button>
        <span className="amount">{basketItem && basketItem.amount || 0}</span>
            <button class="custom-btn btn-12 satinal" disabled={total + product.price>money} onClick={addBasket}><span>Tıkla!</span><span>Satın Al</span></button>
         
            
          
        </div>
        <style jsx>{`
        .product {
            padding:15px;
            background:#fff;
            border:1px solid #ddd;
            margin-bottom:2px;
            color:green;
            width:24%;
            font-family:Century Gothic;
            color:#FB2576;

        }
        
        .product img {
            width:100%;
        }
        .product h6{
            font-size:20px;
            margin-bottom:10px
        }

        .product .price {
            font-size:20px;
            color:black;
        }

        .product .actions{
            display:flex;
            align-items:center;
        }
        `}</style>
        </div>
        </>
    )
}

export default Product;