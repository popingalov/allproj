import React from 'react';

export default function Controls({ onPlus, onMinus }) {
  return (
    <div className="Counter__contrlos">
      <button onClick={onPlus} type="button">
        Увеличить на 1
      </button>
      <button onClick={onMinus} type="button">
        {' '}
        Минуснуть на 1
      </button>
    </div>
  );
}
