import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
  background: #16d47b;
  width: 15%;
  height: 70px;
  color: #eee;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  min-width: 150px;
  max-width: 1280px;
  border-color : #16d47b;
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
