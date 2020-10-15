import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #0b0b0d; /*#0b0b0d*/
  color: #eee;

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      float: left;
      color: #16d47b;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
    p:hover{
      color : #eee;
    }
    .nav{
      color : #eee;
    }
  }
`;
