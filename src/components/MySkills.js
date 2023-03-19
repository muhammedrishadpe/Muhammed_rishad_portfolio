import React from "react";
import { motion } from "framer-motion";

//import global style
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../styles/Global.styled";

// import my skills styles
import { SkillsCard, SkillsCardContainer } from "../styles/MySkills.styled";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/variants";
import { Skills } from "../utils/Data";

function MySkills() {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        responsiveFlex
        responsiveDirection="column-reverse"
        fullWidthChild
      >
        {/* --left-section */}
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill) => (
            <SkillsCard>
              <IconContainer size="5rem" color="white">
                {skill.icon}
              </IconContainer>

              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        {/* --right-section-- */}

        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            MY SKILLS
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            What <BlueText>I can do</BlueText>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem">
            As a skilled developer, I bring to the table a wealth of experience
            in front-end development. My proficiency in a range of programming
            languages including JavaScript, React, Flutter, HTML, and CSS is
            second to none. With a keen eye for design and a passion for
            building dynamic, responsive user interfaces, I have honed my craft
            using cutting-edge tools like React and Redux to create engaging and
            interactive web applications that leave a lasting impression on
            users. Trust me to bring your vision to life with flawless execution
            and exceptional attention to detail.
          </ParaText>
          <ParaText>
            My proficiency in using React enables me to build scalable and
            maintainable applications, creating efficient and adaptable code for
            businesses. With my experience and expertise, I deliver results that
            exceed expectations.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
}

export default MySkills;
