import { useState } from "react";

// Helpers
import { darkModeStorage } from "./../../helpers/darkModeHelper";

// Material UI
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// Components
import { MaterialUISwitch } from "./ToogleMaterialUi";

function ToggleDarkMode() {
  // Use States
  const [darkMode, setDarkModeState] = useState(darkModeStorage || false);

  const setDarkMode = () => {
    const htmlElement = document.documentElement.classList;
    const newDarkMode = !darkMode;

    setDarkModeState(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
    htmlElement.toggle("darkmode");
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={darkMode}
            color="warning"
            onClick={setDarkMode}
          />
        }
        label="DarkMode"
      />
    </FormGroup>
  );
}

export default ToggleDarkMode;
