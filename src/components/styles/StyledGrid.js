import styled from 'styled-components';

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    color : #16d47b;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(90px, 1fr));
  grid-gap: 32px;
  position: relative;

  .grid-element {
    transition : transform .4s ease;
    box-shadow : 0 6px 20px 0 rgba(0,0,0,.3);
    animation: animateGrid 0.4
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
      transform : scale(1);
    }
    to {
      transform : scale(1.1);
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
