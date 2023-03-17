import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './utils/Theme';
import { Container, MainBody } from './styles/Global.styled';

//import components
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
    <MainBody>
   <Container>
    <Showcase />
    <MySkills />
   </Container>
      </MainBody> 
      </ThemeProvider>
     
    </div>
  );
}

export default App;
