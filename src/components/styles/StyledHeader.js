import styled from 'styled-components';

export const StyledHeader = styled.div`
    background : #000;
    padding : 0 20px;
    box-sizing: border-box;

    .header-content{
        max-width : 1280px;
        min-height : 75px;
        padding : 12px 0;
        margin : 0 auto;
        box-sizing: border-box;

        @media screen and (max-width : 500px){
            min-height: 0px;
        }
    }
`;

export const StyledLogo = styled.img`
    width : 270px;
    margin-top : -5px;

    @media screen and (max-width : 500px){
        width : 170px;
    }
`;

export const StyledGithub = styled.img`
    width : 42px;
    margin-top : 4px;
    float : right;

    @media screen and (max-width : 500px){
        display : inline-block;
        width : 32px;
        margin-top : 0px;
    }
`;
