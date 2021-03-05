import React from 'react';
import { CardItem, CardInfo, CardImg } from '../styles/Meals';

const Meals = ({ meals, fetchById }) => {
  const { strMealThumb, strMeal, idMeal } = meals;

  // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  return (
    <CardItem>
      <CardImg src={strMealThumb} alt={strMeal} />
      <CardInfo onClick={() => fetchById(idMeal)}>
        <h3>{strMeal}</h3>
      </CardInfo>
    </CardItem>
  );
};

export default Meals;
