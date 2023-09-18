import { useEffect, useState } from "react";

// Components
import Menu from "./components/menu/Menu";

// Helpers
import { darkModeStorage } from "./helpers/darkModeHelper";

import Hero from "./components/hero/Hero";

function App() {
  // States
  const [data, setData] = useState([]);

  const htmlElement = document.documentElement.classList;
  const darkMode = "darkmode";

  // Define ou não o Dark mode
  darkModeStorage ? htmlElement.add(darkMode) : htmlElement.remove(darkMode);

  useEffect(() => {
    const fetchData = async () => {
      // Test Rest no ssl API
      const response = await fetch("https://adonay-douglas.000webhostapp.com");
      setData(await response.json());
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <Menu />
      <Hero />

      <section
        className="min-h-screen"
        id="sobre"
        style={{ padding: "60px 0" }}
      >
        Sobre
      </section>
    </>
  );
}

export default App;
