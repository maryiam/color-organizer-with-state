import React from 'react';

const Sort = ({ order = 'DESC', onSort= f=>f }) => 
<button onClick={() => onSort(order === 'DESC' ? 'ASC' : 'DESC')} className='button-sort'>
  {
    order === 'DESC' ? 
    'Order by last created' :
    'Order by first created'
  }
  
  </button>;

export default Sort;
