import React, {useState,useEffect} from 'react'
import Skill from './skill'
import FirebaseIcon from '../assets/skills/firebase.png'
import styledcomp from '../assets/skills/styled2.png'
import htmlpng from '../assets/skills/html.png'
import csspng from '../assets/skills/css.png'
import jspng from '../assets/skills/javascript2.png'
import gitpng from '../assets/skills/git.png'
import reactpng from '../assets/skills/react.png'
import bootstrappng from '../assets/skills/bootstrap.png'
import pspng from '../assets/skills/ps2.png'
import aipng from '../assets/skills/ai2.png'
import idpng from '../assets/skills/id2.png'
import prpng from '../assets/skills/pr2.png'
import styled from 'styled-components'
import {SobreMiH1} from './secondSection'
import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

const responsive = '@media (min-width: 650px)'

const DivSkills = styled.div`
    width: 80%;
    margin-left: 10%;
`;

const ContenedorCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 50px;
`;

export const Underline = styled.div`
    width: 120px;
    height: 12px;
    position: relative;
    bottom: 14px;
    left: 10px;
    background-color: #E07A5F;
    opacity: 0.7;
    z-index: -1;
    border-radius: 2px;
`;

const ContenedorCards2 = styled(ContenedorCards)`
    width: 60%;
    margin-left: 20%;

    ${responsive} {
        width: 30%;
        margin-left: 35%;
        margin-top: 100px;
        margin-bottom: 100px;
    }
`;

const ImgDesign = styled.img`
    width: 30px;
`;

const SectionSkills = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200)
    const [isTablet, setTablet] = useState(window.innerWidth < 790)

    const updateMedia = () => {
      setDesktop(window.innerWidth > 1200)
      setTablet(window.innerWidth < 790)
  }
  
  useEffect(() => {
      window.addEventListener("resize", updateMedia)
      return () => window.removeEventListener("resize", updateMedia)
  })

    SwiperCore.use([Navigation, Pagination]);
    return(
        <DivSkills>
            <SobreMiH1>Skills</SobreMiH1>
            <Underline></Underline>
            <ContenedorCards>
            <Swiper
                spaceBetween={isDesktop ? 10 : !isTablet ? 20 : 30}
                slidesPerView={isDesktop ? 4 : !isTablet ? 3 : 2}
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide><Skill name='React.js' skillimg={reactpng}></Skill></SwiperSlide>
                <SwiperSlide><Skill name='Styled Components' skillimg={styledcomp}></Skill></SwiperSlide>
                <SwiperSlide><Skill name='JavaScript' skillimg={jspng}></Skill></SwiperSlide>
                <SwiperSlide><Skill name='Firebase' skillimg={FirebaseIcon}></Skill></SwiperSlide>
                <SwiperSlide><Skill name='HTML5' skillimg={htmlpng}></Skill></SwiperSlide>
                <SwiperSlide><Skill name='CSS3' skillimg={csspng}></Skill></SwiperSlide>
                <SwiperSlide><Skill name='Bootstrap' skillimg={bootstrappng}></Skill></SwiperSlide>
                <SwiperSlide><Skill name='Git' skillimg={gitpng}></Skill></SwiperSlide>
            </Swiper>
            </ContenedorCards>
            <ContenedorCards2>
                <ImgDesign src={pspng}></ImgDesign>
                <ImgDesign src={aipng}></ImgDesign>
                <ImgDesign src={idpng}></ImgDesign>
                <ImgDesign src={prpng}></ImgDesign>
            </ContenedorCards2>
        </DivSkills>
    )
}

export default SectionSkills