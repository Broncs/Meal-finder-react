import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;

  input {
    border: 1px solid #dedede;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 14px;
    padding: 8px 10px;
    margin: 0;
    max-width: 300px;
    flex: 1;
    color: #40514e;
  }
`;

export const ErrorMessage = styled.p`
  color: #fff;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  border-left: 0;
  border-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  border: 1px solid #dedede;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 14px;
  padding: 8px 10px;
  margin: 0;
`;

export const RandomButton = styled.button`
  cursor: pointer;

  border-radius: 4px;
  margin-left: 10px;

  border: 1px solid #dedede;

  font-size: 14px;
  padding: 8px 10px;
`;
