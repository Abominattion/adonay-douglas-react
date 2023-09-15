// Layouts
import { Box, Container, DisplayFlex, ShadedContainer } from "../Layout";

// Globals
import { RoundImage, LinkWithBackground, Icon, TitlePrimary } from "../Globals";

// Images
import avatar from "./../../assets/images/avatar.png";

// Helpers
import { socialMedias } from "./../../helpers/mapHelper";

// Hero Styled Components
import {
  ContainerAbsoluteAvatar,
  ContainerRelative,
  ContainerRelativeAvatar,
  CoverHeader,
  HeroBody,
  SocialMedias,
  UserDescription,
} from "./HeroStyledComponents";

function Hero() {
  // Consts
  const appName = "Adonay Douglas";
  const description = "Desenvolvedor FullStack";
  const altLogo = "Logo contendo um A branco com o fundo azul e rosa";

  return (
    <Box>
      <CoverHeader />
      <ShadedContainer>
        <Container>
          <ContainerRelative>
            <DisplayFlex mobile_flex_box="column">
              <ContainerRelativeAvatar>
                <ContainerAbsoluteAvatar>
                  <RoundImage src={avatar} alt={altLogo} />
                </ContainerAbsoluteAvatar>
              </ContainerRelativeAvatar>

              <HeroBody>
                <UserDescription>
                  <TitlePrimary fontsize="28px">{appName}</TitlePrimary>
                  <small>
                    <strong>{description}</strong>
                  </small>
                </UserDescription>

                <SocialMedias>
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
                </SocialMedias>
              </HeroBody>
            </DisplayFlex>
          </ContainerRelative>
        </Container>
      </ShadedContainer>
    </Box>
  );
}

export default Hero;
