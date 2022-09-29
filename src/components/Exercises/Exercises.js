import React from 'react';

import './Exercises.css';

const Exsercises = (props) => {
    //console.log(props.workoutName);
    const { workoutName, handleAddToCart } = props;
    const { name, details, age, time, img } = workoutName;
    return (
        <div className='workout'>
            <div className="card">
                <img src={img} alt="workout"></img>
                <div className='workout-info'>
                    <h5 className='workout-name'>{name}</h5>
                    <p className='workout-details'>{details}</p>
                    <p>For age: {age}</p>
                    <p>Time required: {time}s</p>

                    <div className='btn-div'>
                        <button onClick={() => handleAddToCart(workoutName)} className='btn-add'>
                            <p className='btn-text'>Add activity</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exsercises;