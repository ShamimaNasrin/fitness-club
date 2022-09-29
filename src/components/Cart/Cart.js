import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Cart.css';

const Cart = ({ cart }) => {
    //console.log(cart);
    const [breakDuration, setBreakDuration] = useState(0);

    useEffect(() => {
        const storedDuration = localStorage.getItem("break_duration");
        if (storedDuration) {
            setBreakDuration(storedDuration);
        }
    }, [])

    const addToList = (duration) => {

        localStorage.setItem("break_duration", duration);


        setBreakDuration(duration);

    }

    //toast function
    const notify = () => toast("Congratulation activity completed!");

    //add total exsercice time
    let totalTime = 0;
    for (const exsercise of cart) {
        totalTime = totalTime + exsercise.time;
    }

    return (
        <div className='main-container'>
            <div className='person-info'>
                <h2>Angelina Jolie</h2>
                <p className='location-p'>Los Angeles</p>
            </div>
            <div className="card flex-center">
                <div className="mini">
                    <h4>60kg</h4>
                    <p className='margin'><small className='text-gray'>Weight</small></p>
                </div>
                <div className="mini">
                    <h4>5.7</h4>
                    <p className='margin'><small className='text-gray'>Height</small></p>
                </div>
                <div className="mini">
                    <h4>30y</h4>
                    <p className='margin'><small className='text-gray'>Age</small></p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className="card flex-center">
                <div className="">
                    <button id='first' onClick={() => addToList(10)} className='radius' type='button'>
                        <p className='margin'><small>10s</small></p>
                    </button>
                </div>
                <div className="">
                    <button id='second' onClick={() => addToList(20)} className='radius' type='button'>
                        <p className='margin'><small>20s</small></p>
                    </button>
                </div>
                <div className="">
                    <button id='third' onClick={() => addToList(30)} className='radius' type='button'>
                        <p className='margin'><small>30s</small></p>
                    </button>
                </div>
                <div className="">
                    <button id='four' onClick={() => addToList(40)} className='radius' type='button'>
                        <p className='margin'><small>40s</small></p>
                    </button>
                </div>
            </div>

            <h3 className='details-h'>Exercise Details</h3>

            <div className="card flex-between">
                <div>
                    <h3 className='custom-h'>Exercise time</h3>
                </div>
                <div>
                    <p className='margin text-gray'>{totalTime}s</p>
                </div>
            </div>

            <div className="card flex-between">
                <div>
                    <h3 className='custom-h'>Break time</h3>
                </div>
                <div>
                    <p className='margin text-gray'> {breakDuration}s</p>
                </div>
            </div>

            <button onClick={notify} className='btn-add'>
                <p id='activity-complete-btn' className='btn-text'>Activity Completed</p>
            </button>
            <ToastContainer />
        </div>
    );
};

export default Cart;