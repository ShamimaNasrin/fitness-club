import React from 'react';
import Cart from '../Cart/Cart';
import Exsercises from '../Exsercises/Exsercises';

const Home = () => {
    return (
        <div className='home-container'>
           <div className='exsercises-container'>
            {
                <Exsercises></Exsercises>
                // products.map(product=><Product 
                // key={product.id}
                // product={product}
                // handleAddToCart={handleAddToCart}></Product>)
            }
            </div> 
           <div className='cart-container'>
            <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;