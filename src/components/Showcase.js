import React from "react";

import { motion } from "framer-motion";

//import globel styles
import {
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
import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  Particle,
} from "../styles/Showcase.styled";

//import asset
import ShowcaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/variants";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="center" fullWidthChild>
        {/* --left-content-- */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          // initial={{x: -50, opacity:0}}
          // whileInView={{x: 0, opacity: 1}}
          // transition={{type: 'tween', duration: 1}}
        >
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
            As a self-taught developer, I've learned to push the limits of
            what's possible with technology. My passion for innovation and
            dedication to excellence have fueled my success in developing
            user-friendly applications that enhance our daily lives. Let's work
            together to create something truly extraordinary.
          </ParaText>

          {/* --Social-icon-- */}
          <FlexContainer gap="20px" responsiveFlex>
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
        </motion.div>
        {/* --Right-Content-- */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
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
