import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import ModalMenu from '../components/modalMenu'
import Typed from 'typed.js'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import fondo1 from '../assets/fondo1.svg'
import SecondSection from '../components/secondSection'

const responsive = '@media (min-width: 650px)'

const moveArrow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const DivHome = styled.div`
    width: 100%;
    min-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & svg {
        font-size: 4rem;
        color: ${props => props.showarrow ? "#81b29a" : "transparent"};
        padding-top: 2rem;
        animation: ${moveArrow} 2s linear infinite;
        cursor:pointer;
    }

    ${responsive} {
        background: url(${fondo1}) no-repeat;
        background-size: 100%;
    }
`;

const Presentacion = styled.div`
    max-width: 400px;
    width: 90%;
    margin-left: 5%;
    height: 100%;
    font-size: 3.5rem;
    font-weight: 800;
    color: #3D405B;
    text-align: left;

    ${responsive} {
        max-width: 800px;
        font-size: 5rem;
    }
`;



const Home = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {

        const options = {
            strings: ['Hola!', 'soy Mili', 'diseñadora gráfica y frontend developer'],
            typeSpeed: 100,
            backSpeed:80,
            startDelay:20,
            backDelay:20,
            showCursor: false
        }

        const typed = new Typed('#instruction', options)

        return () => {
            typed.destroy()
        }

    }, [])

    useEffect(()=> {
        setTimeout(()=> setScroll(true), 11000)
    }, [])

    return(
        <div>
            {openMenu && <ModalMenu></ModalMenu>}
            <Header openMenu={openMenu} handleMenu={handleMenu}></Header>
            <DivHome showarrow={scroll} >
                <Presentacion id='instruction'></Presentacion>
                <FontAwesomeIcon icon={faLongArrowAltDown}/>
            </DivHome>
            {scroll && <SecondSection></SecondSection>}
        </div>
    )
}

export default Home