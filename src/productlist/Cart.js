import React from 'react';

function Cart({ cartCount, cartProduct, setCartProduct }) {








    function deleteData(name) {
        const localdata = localStorage.getItem('product');
        let list = localdata ? JSON.parse(localdata) : [];
        let remList = list.filter((each) => each.name !== name);
        localStorage.setItem('product', JSON.stringify(remList));
        setCartProduct(remList);

    }

    return (
        <div>
            <h1>Your Cart({cartCount})</h1>
            {
                cartProduct.length > 0 ? (

                    cartProduct.map((product, index) => {
                        return (
                            <div key={product.name} className='flex justify-between'>
                                <div>
                                    <p>{product.name}</p>
                                    <p><span>{product.qty}x</span><span>@ ${product.price}</span><span>${product.qty * product.price}</span></p>
                                </div>
                                <button className=''><img className='border border-[#AD8A85] p-[2px] rounded-full' src='./assets/images/icon-remove-item.svg' onClick={(e) => deleteData(product.name)}></img></button>
                            </div>
                        )
                    })

                )
                    : (
                        <p> no data available</p>
                    )
            }

        </div>
    )
}

export default Cart