import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // onScroll function
    const onScroll = () => {
      window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <NavbarContainer bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex>
            {/* --left-logo-- */}
            <Logo>
              R<BlueText>H</BlueText>
            </Logo>

            {/* --right-menu-icon-- */}

            <MenuIcon
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
        <AnimatePresence>
          {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>
      </PaddingContainer>

      {/* --menu-items-- */}
    </NavbarContainer>
  );
}

export default Navbar;
