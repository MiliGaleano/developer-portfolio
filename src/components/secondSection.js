import React from 'react'
import styled, {keyframes} from 'styled-components'
import fondo2 from '../assets/fondo22.svg'
import profile1 from '../assets/uno.jpg'
import profile2 from '../assets/dos.jpg'
import profile3 from '../assets/miligaleano.jpg'
import pointsbg2 from '../assets/pointsbg-01.svg'
import {Underline} from './sectionSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const responsive = '@media (min-width: 650px)'
const responsive2 = '@media (min-width: 1100px)'

const moveArrow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const DivSecondSec = styled.div`
    display: none;
    
    ${responsive} {
        display: flex;
        width: 100%;
        height: 42px;
        background: url(${fondo2}) no-repeat;
        background-size: cover;
    }
`;

const SecondSecCont = styled.div`
    animation: ${moveArrow} 2s linear;
    width: 100%;
    position: relative;

    & section {
        background-color: #81b29a;
        min-height: 100vh;
        height: 674px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ${responsive} {
        position: relative; 
        bottom:42px;

        & section {
            flex-direction: row;
            justify-content: left;
            height: calc(100vh - 42px);
            /* align-items: center; */
    }

    }
`;

const DivPhoto = styled.div`
    background-color: #E07A5F;
    width: 300px;
    height: 300px;
    border-radius: 50%;

    ${responsive2} {
        width: 400px;
        height: 400px;
    }
`;

const Photo = styled.div`
    background: url(${profile3}) no-repeat center;
    background-size: 100%;
    width: 200px;
    height: 200px;
    margin-top: 40px;
    margin-left: 40px;
    border-color: #F2CC8F;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
    position: relative;
    z-index:2;

    ${responsive2} {
        background: url(${profile1}) no-repeat center;
        background-size: 100% auto;
        width: 300px;
        height: 300px;

        &:hover {
            background: url(${profile2}) no-repeat center;
            background-size: 100% auto;
        }
    }
`;

export const PointedBg = styled.img`
    position: absolute;
    width: 250px;
    z-index:1;
    right: 0;

    ${responsive} {
        width: 400px;
    }
`;

const DivMedia = styled.div`
    align-self: flex-start;
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const IconsMedia = styled.div`
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    align-content: center;

    & svg {
        padding: 10px 0;
        color: #3D405B;
        font-size: 25px;
        position: relative;
        z-index: 1;
    }

    ${responsive} {
        & svg:hover {
            color: #F2CC8F;
            cursor: pointer;
        }
    }
`;

const WavyLine = styled.div`
    position: absolute;
    z-index: 0;
    width: 140;
    height: 50px;
    overflow: hidden;
    margin: 14px 0px 0 0;
    text-align: left;
    content: attr(data-text);
    color: rgba(0,0,0,0);
    font-size: 2em;
    text-decoration-style: wavy;
    text-decoration-color: #3D405B;
    text-decoration-line: underline;
    animation: animate 6s linear infinite;
    -webkit-animation: animate 6s linear infinite;
    cursor: default;

    @keyframes animate {
    0% { margin-right: 190px; }
    75% { margin-right: 0px;}
    }
    @-webkit-keyframes animate {
    0% { margin-right: 190px; }
    75% { margin-right: 0px;}
    }
`;

export const SobreMiH1 = styled.h1`
    width: 80%;
    margin-top: 50px;
    font-weight: 900;
    font-size: 3rem;
    color: transparent;
        -moz-text-stroke-color: #3D405B;
        -webkit-text-stroke-color: #3D405B;
        -moz-text-stroke-width: 1px;  
        -webkit-text-stroke-width: 1px;
        text-shadow: .05em .05em rgba(24,25,36,0.2);
    z-index:2;
`;

export const TextSobreMi = styled.p`
    width: 80%;
    font-size: 1rem;
    color: #3D405B;
    font-weight: 500;
    padding: 20px 0;
    line-height: 1.5;

    & a{
        font-weight: 400;
        color: #F4F1DE;
        cursor: pointer;
        text-decoration: underline;
    }

    & a:hover{
        color: #E07A5F;
    }
`;

const DivsDesktop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${responsive2} {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.alignLeft ? 'flex-start' : 'center'};
    }
`;

export const Wavebg = styled.div`
    display: none;
    
    ${responsive} {
        display: flex;
        width: 100%;
        height: 42px;
        background: url(${fondo2}) no-repeat;
        background-size: cover;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
    }
`;

const UnderlineA = styled(Underline)`
    width: 220px;
    z-index:0;
    align-self: flex-start;
    left: 50px;

    ${responsive2} {
    left: 10px;
    }
`;

const SecondSection = ({reference, scroll}) => {
    return (
        <SecondSecCont ref={reference}>
            <DivSecondSec></DivSecondSec>
            <section>
                <DivsDesktop>
                    <DivMedia>
                        <IconsMedia>
                            <a href='https://www.linkedin.com/in/milagros-galeano/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href='https://github.com/MiliGaleano' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                            <a href='https://www.instagram.com/mmiligaleano/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                        </IconsMedia>
                        <WavyLine>xxxxxxxxx</WavyLine>
                    </DivMedia>
                    <DivPhoto>
                        <PointedBg src={pointsbg2}></PointedBg>
                        <Photo></Photo>
                    </DivPhoto>
                </DivsDesktop>
                <DivsDesktop alignLeft>
                    <SobreMiH1>About me</SobreMiH1>
                    <UnderlineA></UnderlineA>
                    <TextSobreMi>I'm a frontend developer and <a href='https://miligaleano.github.io/MyWebsite/' target='_blank' rel='noreferrer'>graphic designer</a>. I enjoy doing projects that challenge me to learn new things. I'm currently looking for a full-time role where I can continue to learn and use my skills in real projects.</TextSobreMi>
                </DivsDesktop>
            </section>
            <Wavebg></Wavebg>
        </SecondSecCont>
    )
}

export default SecondSection