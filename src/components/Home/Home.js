import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercises from '../Exercises/Exercises';
import logo from '../../images/logo.png';
import './Home.css';
import Blog from '../Blog/Blog';

const Home = () => {

    const [workoutNames, setWorkoutNames] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkoutNames(data))
    }, []);

    const handleAddToCart = (workoutName) =>{
        console.log(workoutName);
        const newCart = [...cart, workoutName];
        setCart(newCart);
    }


    return (
        <div className='home-container'>
            <div className='gym-item'>
                <div className='title-container'>
                <div className='gym-title'>
                    <img src={logo} alt="" />
                    <p className='title-p'>FITNESS-CLUB</p>
                </div>
                <h3>Pick any workout catagory and get start</h3>
                </div>
                <div className='exercises-container'>
                    {
                        workoutNames.map(workoutName => <Exercises
                            key={workoutName.id}
                            workoutName={workoutName}
                            handleAddToCart={handleAddToCart}
                        ></Exercises>)
                    }
                </div>
                <Blog></Blog>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;