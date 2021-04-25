import React, {useContext} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import LangContext from '../context/languageContext'

const responsive = '@media (min-width: 650px)'
const responsive2 = '@media (min-width: 900px)'

export const HeaderDiv = styled.div`
    width: 100%;
    background-color: #E07A5F;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Logo = styled.h1`
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

    & p {
        font-size: 1.2rem;
        font-weight: 600;
        color: #3D4058;
        padding-left: 30px;
        text-decoration: none;
    }

    & p:hover {
        background-color: #E07A5F;
        color: #F2CC8F;
        cursor: pointer;
    }
    }

    ${responsive2} {
        align-self: flex-end;
    }
`;

const Header = ({ handleMenu, scroll, handleScroll, el2, el3, el4}) => {

    const {setLang, contentLang} = useContext(LangContext)

    return(
        <HeaderDiv>
            <Logo>Mili Galeano</Logo>
            <HambIcon>
                {scroll && <FontAwesomeIcon icon={faHamburger} onClick={handleMenu}/>}
            </HambIcon>
            <MenuDesktop>
                <p onClick={scroll ? ()=> handleScroll(el2) : undefined}>{contentLang.headerComponent.Menu[0]}</p>
                <p onClick={scroll ? ()=> handleScroll(el3) : undefined}>{contentLang.headerComponent.Menu[1]}</p>
                <p onClick={scroll ? ()=> handleScroll(el4) : undefined}>{contentLang.headerComponent.Menu[2]}</p>
                <p onClick={() => setLang(`${contentLang.headerComponent.SetLanTo}`)}>{contentLang.headerComponent.Menu[3]}</p>
            </MenuDesktop>
        </HeaderDiv>
    )
}

export default Header