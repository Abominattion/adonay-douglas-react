import { useState } from "react";

// Images
import { LOGO_APP } from "../constants/ImagesPathConstants";

// Layouts
import { Box } from "../Layout";

// Components
import Navbar from "./Navbar";
import ToggleDarkMode from "./ToggleDarkMode";

// Menu Styled Components
import { Hamburger, MobileButton, MenuApp } from "./Menu.style";

function Menu() {
  // States
  const [openNav, setOpenNav] = useState<boolean>(false);

  const openNavbar = () => {
    setOpenNav(!openNav);
  };

  return (
    <Box>
      <MenuApp>
        <div className="container m-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <img
                className="w-14 h-14"
                src={LOGO_APP.src}
                alt={LOGO_APP.alt}
              />
            </div>

            <Box>
              <Navbar openNav={openNav}>
                <ToggleDarkMode />
              </Navbar>
            </Box>

            <MobileButton onClick={openNavbar}>
              <Hamburger open_nav={openNav} />
            </MobileButton>
          </div>
        </div>
      </MenuApp>

      {openNav && (
        <Box
          className="md:hidden md:static absolute w-full h-full backdrop-blur-sm bg-[rgba(0,0,0,0.5)] z-10 cursor-pointer "
          onClick={openNavbar}
        />
      )}
    </Box>
  );
}

export default Menu;
