//import "./header.css";

// Layouts
import { Box, Container, DisplayFlex, ShadedContainer } from "../layout/Layout";

// Globals
import {
  RoundImage,
  LinkWithBackground,
  Icon,
  TitlePrimary,
} from "../global/Globals";

// Images
import avatar from "./../../assets/images/avatar.png";

// Hero Styled Components
import { CoverHeader } from "./HeroStyledComponents";

// Helpers
import { socialMedias } from "./../../helpers/mapHelper";

function Hero() {
  // Consts
  const appName = "Adonay Douglas";
  const altLogo = "Logo contendo um A branco com o fundo azul e rosa";

  return (
    <Box>
      <CoverHeader />
      <ShadedContainer>
        <Container>
          <Box className="container-master-relative">
            <DisplayFlex>
              <Box className="content-realite-avatar">
                <Box className="content-avatar-absolute">
                  <RoundImage src={avatar} alt={altLogo} />
                </Box>
              </Box>
              <Box className="navbar">
                <Box>
                  <Box className="user-description">
                    <TitlePrimary fontsize="28px">{appName}</TitlePrimary>
                    <small>
                      <strong>Desenvolvedor FullStack</strong>
                    </small>
                  </Box>
                </Box>

                <Box className="social-medias">
                  <DisplayFlex justifycontent="space-between">
                    {socialMedias.map((anchor, index) => (
                      <LinkWithBackground
                        href={anchor.href}
                        key={index}
                        fontsize="12px"
                        target="_blank"
                      >
                        <Icon className={anchor.icon} fontsize="18px"></Icon>
                        {anchor.text}
                      </LinkWithBackground>
                    ))}
                  </DisplayFlex>
                </Box>
              </Box>
            </DisplayFlex>
          </Box>
        </Container>
      </ShadedContainer>
    </Box>
  );
}

export default Hero;
