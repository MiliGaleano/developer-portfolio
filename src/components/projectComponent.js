import React, {useContext} from 'react'
import styled from 'styled-components'
import {SobreMiH1, TextSobreMi, UnderlineA} from '../components/secondSection'
import LangContext from '../context/languageContext'
import {Link} from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

const responsive = '@media (min-width: 650px)'

const DivProject = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 100px;
    justify-content: center;

    & p {
        font-size: 0.9rem;
    }

    & h2 {
        font-weight: 600;
        font-size: 1rem;
        color: #E07A5F;
    }

    ${responsive} {
        & h2 {
        font-size: 1.5rem;
        }
    }
`;

const DivImgProject = styled.div`
    display: flex;
    align-items: baseline;
    
    & img{
        width: 200px;
    }

`;

const DivTextAbout = styled.div`
    /* padding-left: 8vw; */
    padding-top: 2rem;
    width: 80vw;

     & h1{
         position: relative;
         z-index: 2;
         margin-top: 0;
     }

    & p {
        width: 100%;
    }

    ${responsive} {
        width: 45vw;
        padding-left: 8vw;
    }
`;

const UnderlineProj = styled(UnderlineA)`
    left: 10px;
    width: 190px;
    background-color: #81b29a;
    z-index: 1;
`;

const DivLists = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    font-weight: 600;
    font-size: 1rem;
    justify-content: space-between;
    color: #3D405B;

    & li {
        padding: 0.3rem;
        padding-left: 0;
    }

    & a {
        font-weight: 800;
    }

    & a:hover {
        color: #81b29a;
    }

    ${responsive} {
        width: 43vw;
    }
`;

const DivImgCenter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    text-align: center;

    & section {
        text-align: center;
        padding-left: 0;
        padding-top: 2rem;
        width: 80vw;
    }

    & section h1{
        width: 100%;
        font-size: 2rem;
    }

    & section h2 {
        margin-top: 3rem;
    }

    & section p {
        width: 100%;
    }

    & img {
        width: 100%;
    }

    ${responsive} {
    margin-top: 100px;

        & section {
        width: 40vw;
        }

        & section h1{
            font-size: 3rem;
        }

        & img {
            width: 80%;
        }
    }
`;

const DivChallenges = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 100px;

    & div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    & div div {
        width: 80%;
    }

    & div div img {
        width: 100%;
        margin-bottom: 1rem;
        margin-top: 1.5rem;
        }

    & div div h2 {
        margin-top: 1.5rem;
    }

    & div div p {
        text-align: justify;
        width: 100%;
        margin-bottom: 3rem;
    }

    ${responsive} {
        & div {
        width: 40%;
        }
    }
`;

const Footer = styled.footer`
    margin-top: 100px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    margin-bottom: 5rem;

    & img {
        width: 150px;
        margin-bottom: 4rem;
    }

    & h2 {
        font-weight: 600;
        font-size: 1.5rem;
        color: #E07A5F;
        margin-bottom: 3rem;
    }

    & a {
        font-weight: 800;
        color: #3D405B;
    }

    & a:hover {
        color: #81b29a;
    }
`;

const ProjectComponent = ({project}) => {

    const {contentLang} = useContext(LangContext)

    return(
        <>
        <Fade>
            <DivProject>
                <DivImgProject><img src={project.img[0]} alt='app' /></DivImgProject>
                <DivTextAbout>
                    <SobreMiH1>{project.Title}</SobreMiH1>
                    <UnderlineProj></UnderlineProj>
                    <h2>{project.Subtitle}</h2>
                    <TextSobreMi>{project.About}</TextSobreMi>
                    <DivLists>
                        <ul>
                            {project.Tools.map(tool =>
                                <li key={tool}>{tool}</li>
                            )}
                        </ul>
                        <ul>
                            <a href={project.Links[0]} target="_blank" rel='noreferrer'><li>{contentLang.ProjectsPage.Links[0]}</li></a>
                            <li>-</li>
                            <a href={project.Links[1]} target="_blank" rel='noreferrer'><li>{contentLang.ProjectsPage.Links[1]}</li></a>
                        </ul>
                    </DivLists>
                </DivTextAbout>
                <DivImgCenter>
                    <section>
                        <SobreMiH1>{project.Challenges.Title}</SobreMiH1>
                        <h2>{project.Challenges.Subtitles[0]}</h2>
                        <TextSobreMi>{project.Challenges.Content[0]}</TextSobreMi>
                    </section>
                    <Fade>
                        <img src={project.img[1]} alt={project.Title}></img>
                    </Fade>
                </DivImgCenter>
                <DivChallenges>
                    <Fade direction='left'>
                        <div>
                            <img src={project.img[2]} alt={project.Title}></img>
                            <h2>{project.Challenges.Subtitles[1]}</h2>
                            <TextSobreMi>{project.Challenges.Content[1]}</TextSobreMi>
                        </div>
                    </Fade>
                    <Fade direction='right'>
                        <div>
                            <img src={project.img[3]} alt={project.Title}></img>
                            <h2>{project.Challenges.Subtitles[2]}</h2>
                            <TextSobreMi>{project.Challenges.Content[2]}</TextSobreMi>
                        </div>
                    </Fade>
                </DivChallenges>  
                <DivImgCenter>
                    <section>
                        <SobreMiH1>{project.Learned.Title}</SobreMiH1>
                        <TextSobreMi>{project.Learned.Content}</TextSobreMi>
                    </section>
                </DivImgCenter>         
            </DivProject>
        </Fade>
        <Footer>
            <img src={project.img[4]} alt={project.Title}></img>
            <h2>{contentLang.ProjectsPage.Thanks}</h2> 
            <Link to={project.NextProj} ><h3>{contentLang.ProjectsPage.Next}</h3></Link>              
        </Footer>
    </>                        
    )
}

export default ProjectComponent