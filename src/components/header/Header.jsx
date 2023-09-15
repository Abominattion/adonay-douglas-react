import "./header.css";

// Layouts
import { Box, Container, DisplayFlex } from "../layout/Layout";

// Globals
import { RoundImage, Icon, Link, TitlePrimary } from "../global/Globals";

// Images
import appLogo from "./../../assets/images/icons/logo.png";

// Helpers
import { anchors } from "./../../helpers/mapHelper";
import ToggleDarkMode from "./ToggleDarkMode";

function Header() {
  // Consts
  const appName = "Adonay Douglas";
  const altLogo = "Logo contendo um A branco com o fundo azul e rosa";

  return (
    <Box className="header">
      <Container>
        <DisplayFlex justifycontent="space-between" alignitems="center">
          <DisplayFlex justifycontent="space-between" alignitems="center">
            <RoundImage src={appLogo} alt={altLogo} width={40} />
            <TitlePrimary fontsize="22px">{appName}</TitlePrimary>
          </DisplayFlex>
          <Box>
            <DisplayFlex justifycontent="space-between" alignitems="center">
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
              <ToggleDarkMode />
            </DisplayFlex>
          </Box>
        </DisplayFlex>
      </Container>
    </Box>
  );
}

export default Header;
