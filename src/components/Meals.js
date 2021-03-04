import React from 'react';
import { CardItem, CardInfo, CardImg } from '../styles/Meals';

const Meals = ({ meals }) => {
  const { strMealThumb, strMeal } = meals;
  return (
    <CardItem>
      <CardImg src={strMealThumb} alt={strMeal} />
      <CardInfo>
        <h3>{strMeal}</h3>
      </CardInfo>
    </CardItem>
  );
};

export default Meals;
