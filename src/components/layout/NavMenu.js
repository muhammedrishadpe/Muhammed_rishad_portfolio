import React from "react";

//import globel styles

import { PaddingContainer, FlexContainer } from "../../styles/Global.styled";
import {
  MenuIcon,
  MenuItem,
  NavMenuContainer,
} from "../../styles/Navbar.styled";

import { AiOutlineClose } from "react-icons/ai";
import { navLink } from "../../utils/Data";

const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer>
      {/* --close-button-- */}
      <PaddingContainer left="5%" right="5%" top="2rem">
        <FlexContainer justify="flex-end" responsiveFlex>
          <MenuIcon onClick={() => setOpenMenu(false)}>
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>
      {/* --menu-items-- */}
      <PaddingContainer top="8%">
        <FlexContainer direction="column" align="center" responsiveFlex>
            {navLink.map((link) => (
 <MenuItem key={link.id} href={`#${link.href}`} onClick={() => setOpenMenu(false)}>
 {link.name}
</MenuItem>
            ))}
         
        </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  );
};

export default NavMenu;
