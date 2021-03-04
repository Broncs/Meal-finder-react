import React from 'react';
import { CardItem } from '../styles/Meals';

const Meals = ({ meals }) => {
  const { strMealThumb, strMeal } = meals;
  return (
    <CardItem>
      <img src={strMealThumb} alt={strMeal} />
    </CardItem>
  );
};

export default Meals;
