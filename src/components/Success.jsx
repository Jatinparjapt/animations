import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Success = () => {
  return (
    <div className={`mainDiv `}>
        <div className='textDiv'  >
      <div className='pDiv' >
        <p>Calculations complete for this home!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur ratione sint cum exercitationem?</p>
        <p>You can access this home anytime under MY ACCOUNT after signing in</p>
      </div>
      
      <div className="button">
        <Link className='btn' to={"/"}>Go To Home </Link>
      </div>
        </div>
      <div className={`checkmark-container `}>
        <i className="checkmark-icon ">&#10003;</i>
      </div>
    </div>
  );
};

export default Success;
