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
    width: 33%;
    box-sizing: border-box;
    padding: 10px 0px 8px 80px;
  }

  .movieinfobar-info {
    padding-left: 10px;
    float: left;
  }

  .fa-time,
  .fa-revenue {
    float: left;
    margin-top: -4px;
    font-size : 28px;
  }

  .fa-budget {
    float: left;
    margin-top: -4px;
    font-size : 28px;
  }

  @media screen and (max-width: 768px) {
    .fa-time,
    .fa-revenue,
    .fa-budget {
      display: none;
    }
  .movieinfobar-content-col {
    float: left;
    width: 33%;
    box-sizing: border-box;
    padding: 10px 20px 0px 0px;
  }
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
