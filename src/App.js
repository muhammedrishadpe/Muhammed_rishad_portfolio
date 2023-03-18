import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { Container, MainBody, fadeImage } from "./styles/Global.styled";

//import components
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProject from "./components/MyProject";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import TopFadeImage from "./assets/top.png";
import LeftFadeImage from "./assets/left.png";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <Container>
          <Showcase />
          <MySkills />
          <MyProject />
          <Footer />
        </Container>

        <fadeImage src={TopFadeImage} top="0" />
        <fadeImage src={LeftFadeImage} top="30vh" />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
