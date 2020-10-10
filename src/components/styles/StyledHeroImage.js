import styled from 'styled-components';

export const StyledHeroImage = styled.div`
background : ${props => 
    `linear-gradient(
        to bottom,
        rgba(0,0,0,0) 35%,
        rgba(0,0,0,0) 70%,
        rgba(0,0,0,0.8) 100%
    ),
    url('${props.image}'), #1c1c1c`};

    background-size :  100%, cover;
    background-position : center, center;
    width : 100%;
    height : 90vH;
    position : relative;
    animation : animateHeroimage 0.4s;
    animation-timing-function: ease-in;
    -webkit-animation-timing-function: ease-in;

    .hetroimage-content{
        max-width: 1280px;
        padding: 20px;
        margin : 0 auto;
    }

    .heroimage-content::after{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: inset 10px 100px 250px #000000, inset -1px -1px 25px #000000; 
    }

    .heroimage-text{
        z-index : 100;
        max-width : 700px;
        position : absolute;
        bottom : 40px;
        margin-right : 20px;
        min-height :100px;
        color : #fff;
        margin-left : 4%;

        h1{
            font-family : 'Montserrat', sans-serif;
            font-size : 48px;
            color : #fff;

            @media screen and (max-width : 720px){
                font-size : 36px;
                color : #fff;
            }
        }

        p{
            font-family : 'Montserrat', sans-serif;
            font-size : 20px;
            line-height : 24px;
            color : #fff;
            font-weight : 100;

            @media screen and (max-width : 720px){
                font-size : 16px;
                line-height : 20px;
                color : #fff;
            }
        }

        @media screen and (max-width : 720px){
                max-width : 100%;
        }
    } 

@keyframes animateHeroimage{
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
