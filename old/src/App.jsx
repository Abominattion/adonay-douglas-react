import "./App.css";

import NavbarApp from "./components/navbarApp/NavbarApp";
import Hero from "./components/hero/Hero";

// Helpers
import { darkModeStorage } from "./helpers/darkModeHelper";

// Styled Components Layout
import { Box, Section, Container, DisplayFlex } from "./components/Layout";

// Images
import inProgress from "./assets/images/in-progress.svg";
import { TitlePrimary } from "./components/Globals";

function App() {
  const htmlElement = document.documentElement.classList;
  const darkMode = "darkmode";

  // Define ou não o Dark mode
  darkModeStorage ? htmlElement.add(darkMode) : htmlElement.remove(darkMode);

  return (
    <Box>
      <NavbarApp />
      <Hero />

      <Section id="sobre">
        <Container>
          <DisplayFlex
            justifycontent="center"
            alignitems="center"
            flexdirection="column"
          >
            <TitlePrimary fontsize="28px">Em desenvolvimento 😃</TitlePrimary>
            <Box style={{ width: "360px" }}>
              <img src={inProgress} style={{ width: "100%" }} />
            </Box>
          </DisplayFlex>
        </Container>
      </Section>
    </Box>
  );
}

export default App;
