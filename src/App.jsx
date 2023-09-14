import "./App.css";

import Header from "./components/header/Header";
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
      <Header />
      {/* <SwiperJs /> */}
      <Hero />
    </>
  );
}

export default App;
