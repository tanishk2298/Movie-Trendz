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

  ${'' /* img {
    width: 100%;
    height: auto;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px; */}

    :hover {
      opacity: 0.8;
      transform : scale(1.02)
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;
