import React from "react";

// Components
import NavbarApp from "./components/navbarApp/NavbarApp";

// Helpers
import { darkModeStorage } from "./helpers/darkModeHelper";
import Hero from "./components/hero/Hero";

function App() {
  const htmlElement = document.documentElement.classList;
  const darkMode = "darkmode";

  // Define ou não o Dark mode
  darkModeStorage ? htmlElement.add(darkMode) : htmlElement.remove(darkMode);

  return (
    <>
      <NavbarApp />
      <Hero />
    </>
  );
}

export default App;
