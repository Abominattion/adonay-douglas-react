import "./App.css";

import NavbarApp from "./components/navbarApp/NavbarApp";
import Hero from "./components/hero/Hero";
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
      {/* <SwiperJs /> */}
      <Hero />
    </>
  );
}

export default App;
