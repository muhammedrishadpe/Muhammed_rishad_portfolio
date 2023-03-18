import React from "react";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

// .. import project styles

import { ProjectImage, ProjectImageContainer, TechStackCard } from "../../styles/MyProject.styled";

// import assets

import { FaGithub } from "react-icons/fa";

import Project1 from '../../assets/Project1.png';

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
      {/* --left-section-project--- */}
      <div>
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

        <Button>Visit Website</Button>
      </div>


{/* --- right-section-project-image-- */}
      <div>
      <ProjectImageContainer justify= "flex-end">
        <ProjectImage src={data.project_img} alt={data.projecct_name} />
      </ProjectImageContainer>
      </div>
    </FlexContainer>
  );
};

export default Project;
