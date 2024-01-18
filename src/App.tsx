// Components
import Menu from "./components/menu/Menu";
import Hero from "./components/modules/hero/Hero";
import Portfolio from "./components/modules/portfolio/Portfolio";

// Helpers
import { darkModeStorage } from "./helpers/darkModeHelper";

function App() {
  const htmlElement = document.documentElement.classList;
  const darkMode = "darkmode";

  // Define ou não o Dark mode
  darkModeStorage ? htmlElement.add(darkMode) : htmlElement.remove(darkMode);

  return (
    <>
      <Menu />
      <Hero />
      <Portfolio />
    </>
  );
}

export default App;
