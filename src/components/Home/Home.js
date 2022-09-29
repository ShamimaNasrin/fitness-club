import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exsercises from '../Exsercises/Exsercises';
import logo from '../../images/logo.png';
import './Home.css';
import Blog from '../Blog/Blog';

const Home = () => {

    const [workoutNames, setWorkoutNames] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkoutNames(data))
    }, []);


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
                <div className='exsercises-container'>
                    {
                        workoutNames.map(workoutName => <Exsercises
                            key={workoutName.id}
                            workoutName={workoutName}
                        ></Exsercises>)
                    }
                </div>
                <Blog></Blog>
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;