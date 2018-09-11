import React from 'react';
import Color from './Color';

const ColorsList = ({ list, onDeleteColor = f => f, onRateColor = f => f }) =>
  <ul className='color-list'>
    {(!list.length) ?
      <h3>No colors were loaded ...</h3>
      :
      list.map((item, i) =>
        <Color key={i} color={item} onDelete={onDeleteColor} onRate={onRateColor} />
      )
    }
  </ul>

export default ColorsList;