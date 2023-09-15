import React from "react";
import NavbarApp from "./components/navbarApp/NavbarApp";

// Helpers
import { darkModeStorage } from "./helpers/darkModeHelper";

function App() {
  const htmlElement = document.documentElement.classList;
  const darkMode = "darkmode";

  // Define ou não o Dark mode
  darkModeStorage ? htmlElement.add(darkMode) : htmlElement.remove(darkMode);

  return (
    <>
      <NavbarApp />
    </>
  );
}

export default App;
