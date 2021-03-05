import { useState, useEffect } from 'react';
import {
  Card,
  Form,
  SearchButton,
  RandomButton,
  ErrorMessage,
} from '../styles/Search';
import Loading from './Loading';
import Meals from './Meals';
import RandomMeal from './RandomMeal';

const Search = () => {
  const [mealName, setMealName] = useState('');
  const [mealRecipes, setMealRecipes] = useState({});
  const [randomMeal, setRandomMeal] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const findMealbyName = async () => {
    setStatus('pending');
    try {
      const data = await (
        await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        )
      ).json();
      setRandomMeal(null);
      setMealRecipes(data);
      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
      setError(`Something went wrong ${error}`);
    }
  };

  const handleRandomMeal = async () => {
    setStatus('pending');
    try {
      const data = await (
        await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      ).json();
      setRandomMeal(data);
      setMealRecipes({});
      setMealName('');
      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
      setError(`Something went wrong ${error}`);
    }
  };

  const fetchById = (id) => {
    const singleMeal = mealRecipes.meals.find((meal) => meal.idMeal === id);
    setRandomMeal({ meals: [singleMeal] });
    setMealRecipes({});
    setMealName('');
    setStatus('resolved');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mealName) {
      findMealbyName();
    }
  };

  useEffect(() => {
    setStatus('pending');
    async function firstFetch() {
      try {
        const data = await (
          await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        ).json();
        setMealRecipes(data);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(`Something went wrong ${error}`);
      }
    }
    firstFetch();
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mealName}
          placeholder="Search for meals or keywords"
          onChange={(e) => setMealName(e.target.value)}
        />
        <SearchButton type="submit">
          <i className="fas fa-search"></i>
        </SearchButton>

        <RandomButton type="button" onClick={handleRandomMeal}>
          <i className="fas fa-random"></i>
        </RandomButton>
      </Form>
      {status === 'pending' && <Loading />}
      {status === 'resolved' && (
        <>
          {mealRecipes.meals === null && (
            <ErrorMessage>There are no search results. Try again!</ErrorMessage>
          )}

          {randomMeal && <RandomMeal meal={randomMeal.meals} />}
          {console.log(randomMeal)}
          <Card>
            {mealRecipes.meals &&
              mealRecipes.meals.map((meals) => {
                return (
                  <Meals
                    key={meals.idMeal}
                    meals={meals}
                    fetchById={fetchById}
                  />
                );
              })}
          </Card>
        </>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </>
  );
};

export default Search;
