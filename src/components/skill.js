import React from 'react'
import styled from 'styled-components'
import {Logo} from './header'

const responsive = '@media (min-width: 650px)'

const DivSkill = styled.div`
    width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

    ${responsive} {
    width: 200px;
    }
`;

const CardSkill = styled.div`
    width: 130px;
    background-color: #E07A5F;
    border-radius: 10px;

    ${responsive} {
    width: 200px;
    }
`;

const DivImg = styled.div`
    position: relative;
    width: 90px;
    height: 90px;
    top: 45px;
    background-color: #F4F1DE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${responsive} {
    top: 60px;
    width: 120px;
    height: 120px;
    }
`;

const ImgSkill = styled.img`
    width: ${props=> props.firebase ? '80%' : '70%'};
`;

const NameSkill = styled(Logo)`
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    width: 100%;
    margin-left: 0;
    padding: 0;
    font-size: 0.8rem;

    ${responsive} {
        margin-top: 80px;
        font-size: 1.3rem;
    }
`;

const Skill = ({name,skillimg}) => {
    return(
        <DivSkill>
            <DivImg>
                    <ImgSkill src={skillimg} firebase={name === 'Firebase' ? true : false}></ImgSkill>
            </DivImg>
            <CardSkill>
                <NameSkill>{name}</NameSkill>
            </CardSkill>
        </DivSkill>
    )
}

export default Skill