// Layouts
import { Box, DisplayFlex, ShadedContainer } from "../Layout";

// Globals
import { RoundImage, LinkWithBackground, Icon, TitlePrimary } from "../Globals";

// Helpers
import { SocialMedia, socialMedias } from "../mocks/SocialMediasMock";

// Enum Id Teste
import { HeaderTestIdEnum } from "./enum/HeroTestIDEnum";

// Constants
import { USER_CONSTANTS } from "../constants/UserConstants";

// Images
import { USER_AVATAR } from "../constants/ImagesPathConstants";

// Hero Styled Components
import {
  ContainerAbsoluteAvatar,
  ContainerRelative,
  ContainerRelativeAvatar,
  CoverHeader,
  HeroBody,
  SocialMedias,
  UserDescription,
} from "./Hero.style";

function Hero() {
  return (
    <Box>
      <CoverHeader />
      <ShadedContainer>
        <div className="container m-auto px-4 sm:px-6 md:px-8">
          <ContainerRelative>
            <DisplayFlex
              mobile="column"
              data-testid={HeaderTestIdEnum.HERO_BODY_FLEX_BOX}
            >
              <ContainerRelativeAvatar>
                <ContainerAbsoluteAvatar>
                  <RoundImage src={USER_AVATAR.src} alt={USER_AVATAR.alt} />
                </ContainerAbsoluteAvatar>
              </ContainerRelativeAvatar>

              <HeroBody>
                <UserDescription>
                  <TitlePrimary fontSize="28px">
                    {USER_CONSTANTS.name}
                  </TitlePrimary>
                  <small>
                    <strong>{USER_CONSTANTS.desciption}</strong>
                  </small>
                </UserDescription>

                <SocialMedias>
                  <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-2">
                    {socialMedias.map((anchor: SocialMedia, index) => (
                      <LinkWithBackground
                        href={anchor.href}
                        key={index}
                        fontSize="12px"
                        target="_blank"
                      >
                        <Icon
                          className={anchor.icon}
                          fontSize="14px"
                          data-testid={HeaderTestIdEnum.HERO_SOCIAL_MEDIA_ICON}
                        />
                        {anchor.text}
                      </LinkWithBackground>
                    ))}
                  </div>
                </SocialMedias>
              </HeroBody>
            </DisplayFlex>
          </ContainerRelative>
        </div>
      </ShadedContainer>
    </Box>
  );
}

export default Hero;
