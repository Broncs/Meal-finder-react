import { useEffect } from 'react';
import {
  SingleMeal,
  SingleMealImg,
  SingleMealInfo,
  SingleMealIngredients,
} from '../styles/RandomMeal';

const RandomMeal = ({ meal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [meal]);

  if (!meal) {
    return <> </>;
  }
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
  } = meal[0];

  const ingredientes = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[0][`strIngredient${i}`]) {
      ingredientes.push(
        `${meal[0][`strIngredient${i}`]} - ${meal[0][`strMeasure${i}`]}`
      );
    }
  }

  return (
    <>
      <SingleMeal>
        <h2>{strMeal}</h2>

        <SingleMealImg src={strMealThumb} alt={strMeal} />

        <SingleMealInfo>
          <p>{strCategory}</p>
          <p>{strArea}</p>
        </SingleMealInfo>
        <SingleMealIngredients>
          <p>{strInstructions}</p>
          <h2>Ingredients</h2>
          <ul>
            {ingredientes.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </SingleMealIngredients>
      </SingleMeal>
    </>
  );
};

export default RandomMeal;
