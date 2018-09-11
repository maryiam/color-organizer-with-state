import React from 'react';

const Time = ({timestamp}) => {
  const date = new Date(timestamp);
  const formatted = new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    weekday: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);

  return (
    <p className='date capitalize'>{formatted}</p>
  );
}

export default Time;
