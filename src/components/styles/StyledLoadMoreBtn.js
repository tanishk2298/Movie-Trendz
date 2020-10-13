import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
  background: #16d47b;
  width: 25%;
  min-width: 200px;
  height: 70px;
  color: #eee;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    opacity: 0.8;
    border : 1px solid #16d47b;
    color : #16d47b;
    background : #000;
  }
`;
