import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import ConfirmPage from './ConfirmPage';
import data from './data.json';
import Product from './Product';


function Home() {

    const [confirmation, setConfirmation] = useState(false);
    const [main, setmain] = useState(0);





    const [cartProduct, setCartProduct] = useState(() => {
        const savedCart = localStorage.getItem('product');
        return savedCart ? JSON.parse(savedCart) : [];
    });



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
        <div className='flex items-center justify-center'>
            <div className={`p-[24px] md:p-[40px] bg-[#FCF8F6] relative transition-all duration-300 flex flex-col  xl:flex-row xl:gap-[32px] xl:p-[88px] flex-2`} >
                <div>
                    <h1 className='text-[#260F08] font-Redhat font-extrabold text-[40px] leading-[120%] mb-[32px] '>Desserts</h1>


                    < div className=' space-y-[24px] md:space-y-0 md:grid md:grid-cols-3 md:gap-x-[24px] md:gap-y-[32px] '>

                        {
                            data.map((item, index) => <Product key={index} data={item} addProduct={addProduct} decrementProduct={decrementProduct} setmain={setmain} cartProduct={cartProduct} />)
                        }
                    </div >

                </div>

                <Cart cartCount={cartCount} cartProduct={cartProduct} setCartProduct={setCartProduct} setConfirmation={setConfirmation} />



                {confirmation && <ConfirmPage cartProduct={cartProduct} setConfirmation={setConfirmation} setCartProduct={setCartProduct} />}





            </div >
        </div>
    )
}

export default Home