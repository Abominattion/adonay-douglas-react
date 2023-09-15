// Layouts
import { Box, Container, DisplayFlex } from "../layout/Layout";

// Globals
import { RoundImage, Icon, Link } from "../global/Globals";

// Images
import appLogo from "./../../assets/images/icons/letra-a.gif";

// Helpers
import { anchors } from "../../helpers/mapHelper";
import ToggleDarkMode from "./ToggleDarkMode";

// Hero Styled Components
import {
  Hamburger,
  MobileButton,
  Nav,
  NavBar,
  NavContainer,
} from "./NavbarAppStyledComponent";
import { useState } from "react";

function NavbarApp() {
  // States
  const [openNav, setOpenNav] = useState(false);

  // Consts
  const altLogo = "Logo contendo um A branco com o fundo azul e rosa";

  const openNavbar = () => {
    const newOpenNav = !openNav;
    setOpenNav(newOpenNav);
    console.log(openNav);
  };

  return (
    <NavBar>
      <Container>
        <DisplayFlex justifycontent="space-between" alignitems="center">
          <DisplayFlex justifycontent="space-between" alignitems="center">
            <RoundImage src={appLogo} alt={altLogo} width={60} />
          </DisplayFlex>

          <Box>
            <Nav open_nav={openNav}>
              <NavContainer>
                {anchors.map((anchor, index) => (
                  <Link
                    href={anchor.href}
                    key={index}
                    fontsize="14px"
                    className={anchor.active}
                  >
                    <Icon className={anchor.icon} fontsize="14px"></Icon>
                    {anchor.text}
                  </Link>
                ))}
                <Link>
                  <ToggleDarkMode />
                </Link>
              </NavContainer>
            </Nav>
          </Box>

          <MobileButton onClick={openNavbar}>
            <Hamburger open_nav={openNav} />
          </MobileButton>
        </DisplayFlex>
      </Container>
    </NavBar>
  );
}

export default NavbarApp;
