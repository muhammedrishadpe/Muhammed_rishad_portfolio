import React from "react";
import { motion } from "framer-motion";
//import globel styles

import { PaddingContainer, FlexContainer } from "../../styles/Global.styled";
import {
  MenuIcon,
  MenuItem,
  NavMenuContainer,
} from "../../styles/Navbar.styled";

import { AiOutlineClose } from "react-icons/ai";
import { navLink } from "../../utils/Data";
import { slideInLeft } from "../../utils/variants";

const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer
      as={motion.div}
      variants={slideInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* --close-button-- */}
      <PaddingContainer left="5%" right="5%" top="2rem">
        <FlexContainer justify="flex-end" responsiveFlex>
          <MenuIcon
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            onClick={() => setOpenMenu(false)}
          >
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>
      {/* --menu-items-- */}
      <PaddingContainer top="8%">
        <FlexContainer direction="column" align="center" responsiveFlex>
          {navLink.map((link) => (
            <MenuItem
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              key={link.id}
              href={`#${link.href}`}
              onClick={() => setOpenMenu(false)}
            >
              {link.name}
            </MenuItem>
          ))}
        </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  );
};

export default NavMenu;
