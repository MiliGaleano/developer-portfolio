import React from 'react'
import styled from 'styled-components'
import fondo3 from '../assets/fondo3.svg'
import {DivSecondSec} from './secondSection'

const responsive = '@media (min-width: 650px)'

const DivSectionProj = styled(DivSecondSec)`
    ${responsive} {
            background: url(${fondo3}) no-repeat;
            background-size: cover;
        }
`;

const ProjectsDiv = styled.div`
    width:100%;
    background-color: #3D405B;
    height: 800px;
`;

const SectionProj = ({reference}) => {
    return(
        <div ref={reference}>
            <DivSectionProj></DivSectionProj>
            <ProjectsDiv></ProjectsDiv>
        </div>
    )
}

export default SectionProj