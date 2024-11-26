import React, { useEffect, useState } from 'react';
import Cart from './Cart';
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
        <div className='flex'>


            <div>
                <h1>{cartCount}</h1>
                {
                    data.map((item, index) => <Product key={index} data={item} addProduct={addProduct} decrementProduct={decrementProduct} />)
                }
            </div>

            <Cart cartCount={cartCount} cartProduct={cartProduct} setCartProduct={setCartProduct} />





        </div>
    )
}

export default Home