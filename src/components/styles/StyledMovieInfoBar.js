import styled from 'styled-components';

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  height: auto;
  background: #0B0B0D;
  padding: 14px 20px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;

  .movieinfobar-content {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #eee;
  }

  .movieinfobar-content-col {
    float: left;
    width: 25%;
    box-sizing: border-box;
    padding: 10px 20px 0 0;
  }

  .movieinfobar-info {
    padding: 5px 0 0 10px;
    float: left;
  }

  .fa-time,
  .fa-revenue {
    float: left;
    margin-top: -4px;
  }

  .fa-budget {
    float: left;
    margin-top: -4px;
  }

  @media screen and (max-width: 768px) {
    .fa-time,
    .fa-revenue,
    .fa-budget {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
