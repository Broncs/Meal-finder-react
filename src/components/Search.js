import { useState, useEffect } from 'react';
import { Card } from '../styles/Search';
import Meals from './Meals';
import RandomMeal from './RandomMeal';

const Search = () => {
  const [mealName, setMealName] = useState('');
  const [mealRecipes, setMealRecipes] = useState({});
  const [randomMeal, setRandomMeal] = useState({});

  const findMealbyName = async () => {
    const data = await (
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      )
    ).json();
    setRandomMeal({});
    setMealRecipes(data);
  };

  const handleRandomMeal = async () => {
    const data = await (
      await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    ).json();
    setRandomMeal(data);
    setMealRecipes({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <button
          type="submit"
          disabled={mealName === ''}
          onClick={findMealbyName}
        >
          <i className="fas fa-search"></i>
        </button>

        <button type="submit" onClick={handleRandomMeal}>
          <i className="fas fa-random"></i>
        </button>
        {mealRecipes.meals === null && (
          <p>There are no search results. Try again!</p>
        )}
      </form>
      {randomMeal && <RandomMeal meal={randomMeal.meals} />}

      <Card>
        {mealRecipes.meals &&
          mealRecipes.meals.map((meals) => {
            return <Meals key={meals.idMeal} meals={meals} />;
          })}
      </Card>
    </>
  );
};

export default Search;
