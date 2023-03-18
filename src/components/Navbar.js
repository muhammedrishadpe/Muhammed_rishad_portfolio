import React, {useState} from "react";

// import global styles

import {
  FlexContainer,
  PaddingContainer,
  Container,
  BlueText,
} from "../styles/Global.styled";

// --import-navbar-style--
import { Logo, NavbarContainer, MenuIcon } from "../styles/Navbar.styled";


import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "../utils/Theme";
import NavMenu from "./layout/NavMenu";
function Navbar() {
const [openMenu, setOpenMenu] = useState(false);

  return (
    <NavbarContainer bgColor="transparent">
      <PaddingContainer top="1.2rem" bottom="1.2rem">
        <Container>
          <FlexContainer justify="space-between">
            {/* --left-logo-- */}
            <Logo>
              R<BlueText>H</BlueText>
            </Logo>

        {/* --right-menu-icon-- */}

        <MenuIcon 
        onClick={() => {setOpenMenu(true)}}
        >
            <GiHamburgerMenu /> 
        </MenuIcon>
          </FlexContainer>
        </Container>
{openMenu && <NavMenu setOpenMenu={setOpenMenu} />}

      </PaddingContainer>
    </NavbarContainer>
  );
}

export default Navbar;
