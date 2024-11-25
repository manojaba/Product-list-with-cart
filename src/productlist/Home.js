import React from 'react';
import data from './data.json';
import Product from './Product';


function Home() {


    const product = data[0];
    const { thumbnail, mobile, tablet, desktop } = product.image;



    return (
        <div>

            <div className='w-4 h-4 bg-red-500'></div>
            {
                data.map((item) => <Product data={item} />)
            }





        </div>
    )
}

export default Home