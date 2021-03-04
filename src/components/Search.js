import { useState, useEffect } from 'react';
import { Card, Form, SearchButton, RandomButton } from '../styles/Search';
import Meals from './Meals';
import RandomMeal from './RandomMeal';

const Search = () => {
  const [mealName, setMealName] = useState('');
  const [mealRecipes, setMealRecipes] = useState({});
  const [randomMeal, setRandomMeal] = useState({});

  const findMealbyName = async () => {
    if (mealName === '') {
      return;
    }
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
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mealName}
          placeholder="Search for meals or keywords"
          onChange={(e) => setMealName(e.target.value)}
        />
        <SearchButton type="submit" onClick={findMealbyName}>
          <i className="fas fa-search"></i>
        </SearchButton>

        <RandomButton type="submit" onClick={handleRandomMeal}>
          <i className="fas fa-random"></i>
        </RandomButton>
        {mealRecipes.meals === null && (
          <p>There are no search results. Try again!</p>
        )}
      </Form>

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
