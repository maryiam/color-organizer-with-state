import React from 'react';
import { v4 } from 'uuid';

const AddColorForm = ({ onAddColor = f => f }) => {
  let _title, _color;
  
  const addAction = (event) => {
    event.preventDefault();
    onAddColor({
      title: _title.value,
      color: _color.value,
      id: v4(),
      rating: 0,
      timestamp: new Date().toString()
    });
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  return (
    <form className='color-form'>
      <input type='text' id='title' ref={input => _title = input} required/>
      <input type='color' id='color' ref={input => _color = input} required/>
      <button type='submit' className='button-add' onClick={addAction}>Add</button>
    </form>
  );
}
export default AddColorForm;
