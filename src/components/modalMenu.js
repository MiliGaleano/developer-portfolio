import React, {useContext} from 'react'
import styled from 'styled-components'
import LangContext from '../context/languageContext'

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

const ModalMenu = ({handleMenu, handleScroll, el2, el3, el4}) => {

    const {lang, setLang, contentLang} = useContext(LangContext)

    const handleClick = (x) => {
        handleScroll(x)
        handleMenu()
    }

    const handleClickLang = () => {
        setLang(`${contentLang.headerComponent.SetLanTo}`)
        handleMenu()
    }

    return(
        <ModalMenuDiv>
            <ContenedorMenu>
                <p onClick={()=> handleClick(el2)}>{contentLang.headerComponent.Menu[0]}</p>
                <p onClick={()=> handleClick(el3)}>{contentLang.headerComponent.Menu[1]}</p>
                <p onClick={()=> handleClick(el4)}>{contentLang.headerComponent.Menu[2]}</p>
                <p onClick={handleClickLang}>{contentLang.headerComponent.Menu[3]}</p>
            </ContenedorMenu>
            
        </ModalMenuDiv>
    )
}

export default ModalMenu