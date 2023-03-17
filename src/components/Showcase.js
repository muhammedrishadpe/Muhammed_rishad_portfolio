import React from "react";

import {
  paddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
  PaddingContainer,
} from "../styles/Global.styled";

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        {/* --left-content-- */}
        <div>
          <Heading as="h4" size="h4">
            Hello
          </Heading>
          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            I'm <BlueText>Muhammed Rishad</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            I'm a <BlueText>Software Developer</BlueText>
          </Heading>
          <ParaText>
            I am a self-taught Software developer who has honed my skills
            through online resources and a passion for technology. I am always
            on the lookout for new tools and techniques to create innovative
            solutions that enhance our lives. I have a track record of
            developing user-friendly applications that are efficient and
            intuitive. My dedication to excellence and love for technology drive
            me to make a positive impact on the industry and the world.
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
