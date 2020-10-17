import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #eee;
  background: #0B0B0D;
  border-radius: 20px;
  padding: 0px;
  text-align: center;
  transition : ease 0.4s;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .actor-name {
    display: block;
    font-size: 14px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
    color : #16d47b;
  }

  :hover{
    transform : scale(1.02);
  }
`;
