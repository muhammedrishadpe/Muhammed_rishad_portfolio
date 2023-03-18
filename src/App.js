import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './utils/Theme';
import { Container, MainBody } from './styles/Global.styled';

//import components
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyProject from './components/MyProject';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
    <MainBody>
      <Navbar />
   <Container>
    <Showcase />
    <MySkills />
    <MyProject />
    <Footer />
   </Container>
      </MainBody> 
      </ThemeProvider>
     
    </div>
  );
}

export default App;
