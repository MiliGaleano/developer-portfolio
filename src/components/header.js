import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const responsive = '@media (min-width: 650px)'

const HeaderDiv = styled.div`
    width: 100%;
    background-color: #E07A5F;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Logo = styled.h1`
    width: 60%;
    font-weight: 500;
    font-size: 1.5rem;
    color: #F2CC8F;
    margin-left: 5%;
    padding: 10px;

    ${responsive} {
    width: 30%;
    }
`;

const HambIcon = styled.div`
    margin-right: 3%;

    & svg {
        font-size: 1.5rem;
        color: #F2CC8F;
        /* ${props => props.openMenu === true ? "F4F1DE" : "#F2CC8F"}; */
        padding: 10px;
        padding-top: 12px;
        z-index:1;
        cursor: pointer;
    }

    ${responsive} {
    display: none;
    }
`;

const MenuDesktop = styled.div`
    display: none;

    ${responsive} {
    display: flex;
    flex-direction: row;
    margin-right: 3%;
    justify-content: flex-end;
    align-items: center;

    & a {
        font-size: 1.2rem;
        font-weight: 600;
        color: #3D4058;
        padding-left: 30px;
        text-decoration: none;
    }

    & a:hover {
        background-color: #E07A5F;
        color: #F2CC8F;
    }
    }
`;

const Header = ({openMenu, handleMenu}) => {
    return(
        <HeaderDiv>
            <Logo>Mili Galeano</Logo>
            <HambIcon>
                <FontAwesomeIcon props={openMenu ? 'true' : 'false'} icon={faHamburger} onClick={handleMenu}/>
            </HambIcon>
            <MenuDesktop>
                <Link to="/">Sobre mí</Link>
                <Link to="/projects/p">Proyectos</Link>
                <Link to="/projects/e">Contacto</Link>
            </MenuDesktop>
        </HeaderDiv>
    )
}

export default Header