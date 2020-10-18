import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #eee;
  background: #0B0B0D;
  border-radius: 20px;
  padding: 0px;
  text-align: center;
  transition : ease 0.4s;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
  }

  .movie-name {
    display: block;
    font-size: 14px;
    margin: 10px 10px;
    color : #eee;
  }

  .movie-name:hover{
    color : #16d47b;
    cursor : pointer;
  }

  :hover {
    opacity: 0.8;
    transform : scale(1.02);
  }

   .clickable {
      cursor: pointer;
    }
  }
`;
