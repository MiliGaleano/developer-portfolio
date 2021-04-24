import {createGlobalStyle} from 'styled-components'

const responsive = '@media (min-width: 650px)'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        scroll-behavior:smooth;
        transition: 0.1s;
    }

    body{
        background-color: #F4F1DE;
        max-width: 100%;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .swiper-container{
        padding-bottom: 80px;    
        
        ${responsive} {
            padding-bottom: 100px;
        }
    }

    .swiper-pagination{
        top: 210px;

        ${responsive} {
            top: 280px;
        }
    }

    .swiper-pagination-bullet:hover {
        padding: 1px;

    }

    .swiper-pagination-bullet-active{
        --swiper-theme-color: #3D405B;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    } 
`;