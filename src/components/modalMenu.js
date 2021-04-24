import React from 'react'
import styled from 'styled-components'

const responsive = '@media (min-width: 650px)'

const ModalMenuDiv = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;

    ${responsive} {
    display: none;
    }
`;

const ContenedorMenu = styled.div`
    width: 90%;
    background-color: #F2CC8F;
    text-align: center;
    display: flex;
    flex-direction: column;

    & p {
        font-size: 1.5rem;
        font-weight: 600;
        color: #3D4058;
        padding: 20px 0;
        text-decoration: none;
    }
/* 
    & p:hover {
        background-color: #E07A5F;
        color: #F2CC8F;
    } */
`;

const ModalMenu = ({handleScroll, el2, el3, el4}) => {
    return(
        <ModalMenuDiv>
            <ContenedorMenu>
                <p onClick={()=> handleScroll(el2)}>About me</p>
                <p onClick={()=> handleScroll(el3)}>Projects</p>
                <p onClick={()=> handleScroll(el4)}>Contact</p>
            </ContenedorMenu>
            
        </ModalMenuDiv>
    )
}

export default ModalMenu