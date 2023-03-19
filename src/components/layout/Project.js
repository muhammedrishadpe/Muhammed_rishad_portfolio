import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

// .. import project styles

import {
  ProjectImage,
  ProjectImageContainer,
  TechStackCard,
} from "../../styles/MyProject.styled";

// import assets

import { FaGithub } from "react-icons/fa";

import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/variants";

const Project = ({ data }) => {
  return (
    <FlexContainer
      direction={data.reverse ? "row-reverse" : false}
      fullWidthChild
    >
      {/* --left-section-project--- */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.projecct_name}
          </Heading>

          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>

        <Button 
        onClick={() => {
          window.open(data.project_url);
        }}
        
        >Visit Website</Button>
      </motion.div>

      {/* --- right-section-project-image-- */}
      <div>
        <ProjectImageContainer
          as={motion.div}
          variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify={data.reverse ? "flex-start" : "flex-end"}
        >
          <ProjectImage src={data.project_img} alt={data.projecct_name} />
        </ProjectImageContainer>
      </div>
    </FlexContainer>
  );
};

export default Project;
