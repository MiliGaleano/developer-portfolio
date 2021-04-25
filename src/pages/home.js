import React, { useState, useEffect, useRef, useContext } from 'react'
import Header from '../components/header'
import ModalMenu from '../components/modalMenu'
import Typed from 'typed.js'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import fondo1 from '../assets/fondo1.svg'
import SecondSection from '../components/secondSection'
import SectionSkills from '../components/sectionSkills'
import SectionProj from '../components/sectionProj'
import ContactSection from '../components/contactSection'
import LangContext from '../context/languageContext'

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

    & span {
        font-size: 3.5rem;
        font-weight: 800;
        color: transparent;
        -moz-text-stroke-color: #3D405B;
        -webkit-text-stroke-color: #3D405B;
        -moz-text-stroke-width: 1px;  
        -webkit-text-stroke-width: 1px;
        text-shadow: .05em .05em rgba(24,25,36,0.2);
    }

    ${responsive} {
        max-width: 800px;
        font-size: 5rem;

        & span {
            max-width: 800px;
            font-size: 5rem;
        }
    }
`;

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [scroll, setScroll] = useState(false)

    const {contentLang} = useContext(LangContext)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        setScroll(false)
        setTimeout(()=> setScroll(true), 10000)

        const options = {
            strings: contentLang.homeComponent.Presentation,
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

    }, [contentLang])

    // useEffect(()=> {
    //     setTimeout(()=> setScroll(true), 10000)
    // }, [])

    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const el2 = useRef();
    const el3 = useRef();
    const el4 = useRef();

    const handleScroll = (x) => {
        scrollToDiv(x)
    }

    return(
        <div>
            {openMenu && <ModalMenu handleMenu={handleMenu} handleScroll={handleScroll} el2={el2} el3={el3} el4={el4}></ModalMenu>}
            <Header handleMenu={handleMenu} scroll={scroll} handleScroll={handleScroll} el2={el2} el3={el3} el4={el4}></Header>
            <DivHome showarrow={scroll} >
                <Presentacion id='instruction'></Presentacion>
                <FontAwesomeIcon icon={faLongArrowAltDown} onClick={()=> scrollToDiv(el2)}/>
            </DivHome>
            {scroll && 
                <>
                    <SecondSection reference={el2} scroll={scroll}></SecondSection>
                    <SectionSkills></SectionSkills>
                    <SectionProj reference={el3}></SectionProj>
                    <ContactSection reference={el4}></ContactSection>
                </>
            }
        </div>
    )
}

export default Home