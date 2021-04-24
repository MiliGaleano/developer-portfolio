import React from 'react'
import styled from 'styled-components'
import {SobreMiH1, TextSobreMi} from './secondSection'
import {Underline, DivSkills} from './sectionSkills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const responsive = '@media (min-width: 650px)'

const Mail = styled.a`
    font-weight: 600;
        color: #E07A5F;
        cursor: pointer;
        text-decoration: underline;
    
    &:hover {
        font-weight: 800;
    }
`;

const ContactUnderline = styled(Underline)`
    width:180px;
`;

const IconsContact = styled.div`
    width: 46%;
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-content: center;

    & svg {
        color: #3D405B;
        font-size: 2rem;
    }

    ${responsive} {
        width: 18%;

        & svg:hover {
            color: #E07A5F;
            cursor: pointer;
        }
    }
`;

const ContactSection = ({reference}) => {
    return(
        <DivSkills ref={reference}>
            <SobreMiH1>Contact</SobreMiH1>
            <ContactUnderline></ContactUnderline>
            <TextSobreMi>If you'd like to work with me or have any questions about my work let's get in touch!</TextSobreMi>
            <Mail href="mailto:mmiligaleano@gmail.com">mmiligaleano@gmail.com</Mail>
            <IconsContact>
                <a href='https://www.linkedin.com/in/milagros-galeano/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://github.com/MiliGaleano' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                <a href='https://www.instagram.com/mmiligaleano/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagramSquare} /></a>
            </IconsContact>
        </DivSkills>
    )
}

export default ContactSection
