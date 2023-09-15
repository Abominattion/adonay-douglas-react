import { useEffect, useState } from "react";

// Layouts
import { Box, Container, DisplayFlex } from "../Layout";

// Globals
import { RoundImage, Icon } from "../Globals";

// Images
import appLogo from "./../../assets/images/icons/letra-a.gif";

// Helpers
import { anchors } from "../../helpers/mapHelper";

// Components
import ToggleDarkMode from "./ToggleDarkMode";

// Hero Styled Components
import {
  Hamburger,
  MobileButton,
  Nav,
  NavBar,
  NavContainer,
  NavLink,
} from "./NavbarAppStyledComponent";

function NavbarApp() {
  // States
  const [openNav, setOpenNav] = useState(false);

  // Consts
  const altLogo = "Logo contendo um A branco com o fundo azul e rosa";

  const changeActiveAnchor = (id) => {
    const oldAchorActive = document.querySelector(".active-true");
    const newAchorActive = document.getElementById(id + "-link");

    oldAchorActive.classList.remove("active-true");
    newAchorActive.classList.add("active-true");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (elemtnts) => {
        elemtnts.forEach((elemtnt) => {
          if (elemtnt.isIntersecting) {
            const id = elemtnt.target.id;
            changeActiveAnchor(id);
          }
        });
      },
      { threshold: 0.9 }
    );

    anchors.forEach((element) => {
      const targetElement = document.getElementById(element.href);

      if (targetElement) {
        observer.observe(targetElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const openNavbar = () => {
    const newOpenNav = !openNav;
    setOpenNav(newOpenNav);
  };

  const navigateTo = (id) => {
    const section = document.getElementById(id);

    changeActiveAnchor(id);

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
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
                  <NavLink
                    key={index}
                    fontsize="14px"
                    className={anchor.active}
                    id={anchor.href + "-link"}
                    onClick={() => {
                      navigateTo(anchor.href, index);
                    }}
                  >
                    <Icon className={anchor.icon} fontsize="14px"></Icon>
                    {anchor.text}
                  </NavLink>
                ))}
                <NavLink>
                  <ToggleDarkMode />
                </NavLink>
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
