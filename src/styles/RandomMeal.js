import styled from 'styled-components';

export const SingleMeal = styled.div`
  margin: 30px auto;
  color: #fff;
  font-size: 1.2rem;
  width: 100%;

  p {
    margin: 0;
    letter-spacing: 0.5px;
    line-height: 1.5;
  }
  h2 {
    font-size: 2rem;
  }

  @media screen and (min-width: 800px) {
    width: 70%;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }
`;

export const SingleMealImg = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 15px;
  border: 4px #fff solid;
  border-radius: 2px;

  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

export const SingleMealInfo = styled.div`
  margin: 1.3rem;
  padding: 0.8rem;
  border: 2px #e09850 dashed;
  border-radius: 5px;
`;

export const SingleMealIngredients = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border: 1px solid #ededed;
    border-radius: 5px;
    background-color: #fff;
    display: inline-block;
    color: #2d2013;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    margin: 0 5px 5px 0;
  }
`;
