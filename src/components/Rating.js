import React from 'react';

const Rating = ({ rate = 0, maxRate = 5, onRate }) => {
  return (
    <div>
      <div className='rating-wrapper'>
         {
        [...Array(maxRate)].map((star, key) =>
          <div key={key} className={key < rate ? 'star selected' : 'star'}  onClick={() => onRate(key)}></div>
        )
      }
      </div>
     
      <div>{rate} of {maxRate} stars</div>
    </div>
  )
};

export default Rating;