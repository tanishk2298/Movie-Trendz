import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const StyledMovieInfo = styled.div`
  background: ${props =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 0.4s;
  animation-timing-function: ease-in;
    -webkit-animation-timing-function: ease-in;

  .movieinfo-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
  }

  .movieinfo-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }


  .movieinfo-text {
    font-family: 'Montserrat', sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 44px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 18px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      line-height: 28px;
      font-weight: 100;
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .star{
    color : #16d47b;
  }

  .score {
    font-size : 20px;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  .date {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 1087px) {
    min-height: 600px;
    height: auto;

    .rating{
      display : none;
    }
  }

  @keyframes animateMovieinfo {
    0% {
        transform: scale(1.08,1.08);
        opacity : 0;
    }
    25% {
        transform: scale(1.06,1.06);
        opacity : 0.2;
    }
    50% {
        transform: scale(1.04,1.04);
        opacity : 0.4;
    }
    75% {
        transform: scale(1.02,1.02);
        opacity : 0.6;
    }
    100% {
        transform: scale(1,1);
        opacity : 1;
    }
  }
`;
