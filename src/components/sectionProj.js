import React, {useContext} from 'react'
import styled from 'styled-components'
import fondo3 from '../assets/fondo3.svg'
import {DivSecondSec, SobreMiH1, Wavebg} from './secondSection'
import {Underline, DivSkills, ContenedorCards} from './sectionSkills'
import CardProject from './CardProject'
import {Link} from 'react-router-dom'
import pointsbg2 from '../assets/pointsbg-02-01.svg'
import LangContext from '../context/languageContext'


const responsive = '@media (min-width: 650px)'

const DivSectionProj = styled(DivSecondSec)`
    ${responsive} {
            background: url(${fondo3}) no-repeat;
            background-size: cover;
        }
`;

const ProjectsDiv = styled.div`
    width:100%;

    & section {
        background-color: #3D405B;
        padding-bottom: 50px;
    }
`;

const TitleProj = styled(SobreMiH1)`
    margin-top: 0;
    padding-top: 100px;
    margin-left: 10%;
        -moz-text-stroke-color: #E07A5F;
        -webkit-text-stroke-color: #E07A5F;
        -moz-text-stroke-width: 0.5px;  
        -webkit-text-stroke-width: 0.5px;
        text-shadow: .05em .05em rgba(88,48,37,0.3);
    position: relative;
    z-index: 3;
`;

const UnderlineProj = styled(Underline)`
    width: 186px;
    margin-left: 10%;
    background-color: #F2CC8F;
    opacity: 0.1;
    z-index: 1;
`;

const LastWavebg = styled(Wavebg)`
    ${responsive} {
        background: url(${fondo3}) no-repeat;
        background-size: cover;
    }
`;

const PointedBg = styled.img`
    position: absolute;
    width: 200px;
    z-index:-1;
    right: 0;
    margin-top: 200px;

    ${responsive} {
        width: 400px;
        margin-top: 0;
        z-index:1;
    }
`;

// const Proyectos = [{img:`${ProjImg1}`, name:'BLessed App', text:'A watchlist app where you can keep track of the movies and series you have watched, make your favourites list and find new things to watch.', urltype: 'link', src:'/projects/Blessed'},
// {img:`${ProjImg2}`, name:'VacunAr App', text:'An app to keep your Immunization registry organized. Save your vaccination records and find the nearest place to take your next vaccine.', urltype: 'link', src:'/projects/Vacunar'},
// {img:`${ProjImg3}`, name:'Pomodoro & ToDo', text:'This web app will help you organice your day. Build your todo list and set your pomodoro clock to make your day more productive.', urltype: 'link', src:'/projects/Pomodoro'},
// {img:`${ProjImg4}`, name:'Rock-Paper-Scissors', text:'Web page where you can find where to go and what to do while travelling in Argentina. Check maps and currently and extended weather info.', urltype: 'demo', src:'https://miligaleano.github.io/Rock-Paper-Scissors/'},
// {img:`${ProjImg5}`, name:'Turismo', text:'Web page where you can find where to go and what to do while travelling in Argentina. Check maps and currently and extended weather info.', urltype: 'demo', src:'https://miligaleano.github.io/Turismo/'},
// {img:`${ProjImg6}`, name:'Deimos & Fobos', text:'Deimos & Fobos landing page. Promoting the launching of their new documental series and virtual reality game.', urltype: 'demo', src:'https://miligaleano.github.io/Deimos-y-Fobos/'},
// ]

const SectionProj = ({reference}) => {
    const {contentLang} = useContext(LangContext)

    const Proyectos = contentLang.ProjectsSectionComponent.Projects

    return(
        <div ref={reference}>
            <DivSectionProj></DivSectionProj>
            <ProjectsDiv>
                <section>
                    <TitleProj>{contentLang.ProjectsSectionComponent.Title}</TitleProj>
                    <UnderlineProj></UnderlineProj>
                    <DivSkills>
                        <ContenedorCards>
                            {Proyectos.map( proj => (
                            proj.urltype !== 'DEMO' ?
                                <Link to={proj.src} key={proj.name}>
                                    <CardProject project={proj}></CardProject>
                                </Link>
                            :   <a href={`${proj.src}`} target='_blank' rel='noreferrer' key={proj.name}>
                                    <CardProject project={proj}></CardProject>
                                </a>
                            )
                            )}
                        </ContenedorCards>
                        <PointedBg src={pointsbg2}></PointedBg>
                    </DivSkills>
                </section>
                <LastWavebg></LastWavebg>
            </ProjectsDiv>
        </div>
    )
}

export default SectionProj