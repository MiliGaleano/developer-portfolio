import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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

    & a {
        font-size: 1.5rem;
        font-weight: 600;
        color: #3D4058;
        padding: 20px 0;
        text-decoration: none;
    }

    & a:hover {
        background-color: #E07A5F;
        color: #F2CC8F;
    }
`;

const ModalMenu = () => {
    return(
        <ModalMenuDiv>
            <ContenedorMenu>
                <Link to="/">Sobre mí</Link>
                <Link to="/projects/p">Proyectos</Link>
                <Link to="/projects/e">Contacto</Link>
            </ContenedorMenu>
        </ModalMenuDiv>
    )
}

export default ModalMenu