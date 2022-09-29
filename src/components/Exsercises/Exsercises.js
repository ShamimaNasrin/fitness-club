import React from 'react';

import './Exsercises.css';

const Exsercises = (props) => {
    //console.log(props.workoutName);
    const {name, details, age, time, img} = props.workoutName;
    return (
        <div className='workout'>
            <img src={img} alt="workout"></img>
            <div className='workout-info'>
                <h5 className='workout-name'>{name}</h5>
                <p className='workout-details'>{details}</p>
                <p>For age: {age}</p>
                <p>Time required: {time}s</p>
                <button  className='btn-add'>
                <p className='btn-text'>Add activity</p>
                
            </button>
            </div>
        </div>
    );
};

export default Exsercises;