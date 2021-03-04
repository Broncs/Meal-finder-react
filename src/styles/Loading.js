import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30vh;

  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    position: relative;
    height: 0;
    width: 0;
    span {
      display: block;
      height: 20px;
      width: 20px;
      background: #fff;
      position: absolute;
      border-radius: 50%;

      &:nth-of-type(1) {
        left: -40px;
        animation: loader1Anim 1.2s linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: forwards;
      }
      &:nth-of-type(2) {
        left: -10px;
        animation: loader1Anim 1.2s linear;
        animation-delay: 0.2s;
        animation-iteration-count: infinite;
        animation-direction: forwards;
      }
      &:nth-of-type(3) {
        left: 20px;
        animation: loader1Anim 1.2s linear;
        animation-delay: 0.4s;
        animation-iteration-count: infinite;
        animation-direction: forwards;
      }
    }
  }

  @keyframes loader1Anim {
    from,
    to {
      transform: scale3d(1.15, 0.8, 1);
    }
    42% {
      transform: translateY(-45px);
    }
    88% {
      transform: scale3d(1, 1, 1);
    }
    95% {
      transform: scale3d(1.05, 0.85, 1);
    }
    98% {
      transform: scale3d(1.15, 0.8, 1);
    }
  }
`;
