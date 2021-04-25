import React from 'react'
import styled from 'styled-components'

const DivCardProj = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 20px;

    &:hover p span {
        font-weight: 600;
        color: #3D405B;
        text-decoration: underline;
        padding-left: 5px;
    }

    &:hover img {
        top:75px;
        filter: brightness(100%);
    }
`;

const ImgProj = styled.img`
    width: 100%;
    position: relative;
    top:80px;
    cursor: pointer;
    filter: brightness(90%);
`;

const DivTextProj = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;
    background-color: #E07A5F;
    border-radius: 20px;
    padding: 70px 20px 0;
`;

const TitleProj = styled.h1`
    width: 100%;
    font-weight: 500;
    font-size: 1.5rem;
    color: #F2CC8F;
`;

const ContentProj = styled.p`
    font-size: 0.9rem;
    color: #3D405B;
    font-weight: 500;
    padding: 10px 0;
    line-height: 1.5;

    & span{
        font-weight: 500;
        color: #F2CC8F;
        cursor: pointer;
        line-height: 2.5;
    }
`;

const CardProject = ({project}) => {
    return(
            <DivCardProj>
                <ImgProj src={project.img}></ImgProj>
                <DivTextProj>
                    <TitleProj>{project.name}</TitleProj>
                    <ContentProj>{project.text}<br></br>
                        <span>{project.urltype}</span>
                    </ContentProj>
                </DivTextProj>
            </DivCardProj>
    )
}

export default CardProject