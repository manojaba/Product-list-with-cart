import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import ConfirmPage from './ConfirmPage';
import data from './data.json';
import Product from './Product';


function Home() {




    const [cartProduct, setCartProduct] = useState(() => {
        const savedCart = localStorage.getItem('product');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    console.log(`cart product : ${cartProduct.length}`)

    const [cartCount, setCartCount] = useState(() => {
        const savedCartCount = localStorage.getItem('cart');
        return savedCartCount ? parseInt(savedCartCount, 10) : 0;
    });


    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(cartProduct));
        localStorage.setItem('cart', (cartProduct.length));
        setCartCount(cartProduct.reduce((total, item) => total + item.qty, 0));
    }, [cartProduct])





    const addProduct = (thumbnail, name, category, price, qty) => {
        setCartProduct((prev) => {
            const existingProduct = prev.find((item) => item.name === name);
            if (existingProduct) {
                return prev.map((item) =>
                    item.name === name ? { ...item, qty: item.qty + qty } : item
                );
            }
            return [...prev, { thumbnail, name, category, price, qty }];
        });
    };

    const decrementProduct = (name) => {
        setCartProduct((prev) => {
            const existingProduct = prev.find((item) => item.name === name);
            if (existingProduct.qty > 1) {
                return prev.map((item) =>
                    item.name === name ? { ...item, qty: item.qty - 1 } : item
                );
            }
            return prev.filter((item) => item.name !== name);
        });
    };





    return (
        <div className='p-[24px] bg-[#FCF8F6]' >
            <h1 className='text-[#260F08] font-Redhat font-extrabold text-[40px] leading-[120%] mb-[32px] '>Desserts</h1>


            < div className='bg-green-500 space-y-[24px]'>

                {
                    data.map((item, index) => <Product key={index} data={item} addProduct={addProduct} decrementProduct={decrementProduct} />)
                }
            </div >

            <Cart cartCount={cartCount} cartProduct={cartProduct} setCartProduct={setCartProduct} />
            <ConfirmPage cartProduct={cartProduct} />





        </div >
    )
}

export default Home