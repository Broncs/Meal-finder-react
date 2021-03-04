import React from 'react';

const RandomMeal = ({ meal }) => {
  return (
    <div>
      {meal && <img src={meal[0].strMealThumb} alt={meal[0].strMeal} />}{' '}
    </div>
  );
};

export default RandomMeal;
