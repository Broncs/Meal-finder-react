import styled from 'styled-components';

export const CardItem = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border: 4px solid #fff;
  border-radius: 2px;
`;

export const CardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-in;
  color: #fff;

  &:hover {
    opacity: 1;
  }
`;
