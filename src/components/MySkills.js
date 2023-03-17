import React from 'react'


//import global style 
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

// import my skills styles
import {
    SkillsCard,
    SkillsCardContainer
} from '../styles/MySkills.styled'

import {Skills} from '../utils/Data';

function MySkills() {
  return (
   <PaddingContainer
   id="Skills"
   top="10%"
   bottom="10%"
   >

<FlexContainer fullWidthChild>
    {/* --left-section */}
   <SkillsCardContainer>
  {Skills.map((skill) => (
      <SkillsCard>
        <IconContainer size="5rem" color="blue">
            {skill.icon}
        </IconContainer>

        <Heading as="h4" size="h4">
            {skill.tech}
        </Heading>
      </SkillsCard>
  ))}
   </SkillsCardContainer>
   {/* --right-section-- */}
   
   <div></div>
</FlexContainer>

   </PaddingContainer>
  )
}

export default MySkills
