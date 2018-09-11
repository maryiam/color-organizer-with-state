import React from 'react';
import Rating from './Rating';
import Time from './Time';

const Color = ({ color, onDelete, onRate }) => {
  const deletion = (e, id) => {
    e.preventDefault();
    onDelete(id);
  }

  return (
    <li className='color-box'>
      <button className='button-close' onClick={e => deletion(e, color.id)}>X</button>
      <h2>{color.title}</h2>
      <Time timestamp={color.timestamp} />
      <div className='color-bg' style={{ 'backgroundColor': color.color }}></div>
      <Rating rate={color.rating} onRate={key => onRate(color.id, key + 1)} />
    </li>
  );
}

export default Color;
