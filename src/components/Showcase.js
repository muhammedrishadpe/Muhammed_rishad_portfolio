import React from "react";

//import globel styles
import {
  paddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
  PaddingContainer,
} from "../styles/Global.styled";

//import react-icons
import { BsLinkedin, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
//import showcase styled
import { ShowcaseImageCard, ShowcaseParticleContainer, Particle } from "../styles/Showcase.styled";

//import asset
import ShowcaseImg from '../assets/showcase-img.png';
import BackgroundImg from '../assets/particle.png';
const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        {/* --left-content-- */}
        <div>
          <Heading as="h4" size="h4">
            Hello
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Muhammed Rishad</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            I'm a <BlueText>Software Developer</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            I am a self-taught Software developer who has honed my skills
            through online resources and a passion for technology. I am always
            on the lookout for new tools and techniques to create innovative
            solutions that enhance our lives. I have a track record of
            developing user-friendly applications that are efficient and
            intuitive. My dedication to excellence and love for technology drive
            me to make a positive impact on the industry and the world.
          </ParaText>

          {/* --Social-icon-- */}
          <FlexContainer gap="20px">
            <IconContainer color="blue" size="1.5rem">
               <BsLinkedin />
            </IconContainer>

            <IconContainer color="blue" size="1.5rem">
               <BsTwitter />
            </IconContainer>

            <IconContainer color="blue" size="1.5rem">
               <BsYoutube />
            </IconContainer>

            <IconContainer color="blue" size="1.5rem">
               <BsInstagram />
            </IconContainer>
          </FlexContainer>
        </div>
        {/* --Right-Content-- */}
        <FlexContainer justify="flex-end">
            <ShowcaseParticleContainer>
                <ShowcaseImageCard>
                    <img src={ShowcaseImg} alt="showcase" />
                </ShowcaseImageCard>
                <Particle  src={BackgroundImg}
                alt="particle"
                top="-80px"
                left="20px"
                rotate="60deg"
                />
                <Particle  src={BackgroundImg}
                alt="particle"
                top="50px"
                right="-70px"
                rotate="0deg"
                />
                <Particle  src={BackgroundImg}
                alt="particle"
                bottom="10px"
                left="-70px"
                rotate="50deg"
                />
            </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
