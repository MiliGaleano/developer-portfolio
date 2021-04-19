import React from 'react'
import styled, {keyframes} from 'styled-components'
import fondo2 from '../assets/fondo2.svg'

const responsive = '@media (min-width: 650px)'

const moveArrow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const DivSecondSec = styled.div`
    display: none;
    
    ${responsive} {
        display: flex;
        width: 100%;
        height: 42px;
        background: url(${fondo2}) no-repeat;
        background-size: 100%;
    }
`;

const SecondSecCont = styled.div`
    animation: ${moveArrow} 2s linear;
    width: 100%;
    position: relative;

    & section {
        background-color: #81b29a;
        height: 100vh;
    }

    ${responsive} {
        position: relative; 
        bottom:42px;
    }
`;

const SecondSection = () => {
    return (
        <SecondSecCont>
            <DivSecondSec></DivSecondSec>
            <section></section>
        </SecondSecCont>
        
    )
}

export default SecondSection