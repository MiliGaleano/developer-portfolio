import React, {useContext} from 'react'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {HeaderDiv, Logo} from '../components/header'
import ProjectComponent from '../components/projectComponent'
import LangContext from '../context/languageContext'

const LangButton = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 3%;
    justify-content: flex-end;
    align-items: center;

    & p {
        font-size: 1.2rem;
        font-weight: 600;
        color: #3D4058;
    }
    
    & p:hover {
        color: #F2CC8F;
        cursor: pointer;
    }
`;

const Logo2 = styled(Logo)`
    & a {
        font-size:1.5rem;
    }

    & a:hover {
        padding-left: 5px;
    }
`;

const Projects = () => {

    const {setLang, contentLang} = useContext(LangContext)
    const location = useLocation()
    const path=location.pathname
    const arrpath= path.split('/')
    let showProj = arrpath[arrpath.length-1]
    let project
    if (showProj === 'Blessed') {
        project = contentLang.ProjectsPage.Blessed
    } else if (showProj === 'Vacunar') {
        project = contentLang.ProjectsPage.Vacunar
    }

    return(
        <div>
            <HeaderDiv>
                <Logo2><Link to='/'>Mili Galeano</Link></Logo2>
                <LangButton onClick={() => setLang(`${contentLang.headerComponent.SetLanTo}`)}>
                    <p>{contentLang.headerComponent.Menu[3]}</p>
                </LangButton>
            </HeaderDiv>
            <ProjectComponent project={project}></ProjectComponent>
        </div>
    )
}

export default Projects