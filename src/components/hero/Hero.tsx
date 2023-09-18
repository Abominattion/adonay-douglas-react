// Layouts
import { Box, ShadedContainer } from "../Layout";

// Globals
import { RoundImage, LinkWithBackground, Icon } from "../Globals";

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
  ContainerRelativeAvatar,
  CoverHeader,
  SocialMedias,
} from "./Hero.style";

function Hero() {
  return (
    <Box>
      <CoverHeader />
      <ShadedContainer>
        <div className="container m-auto px-4 sm:px-6 md:px-8">
          <div
            className="flex flex-col md:flex-row"
            data-testid={HeaderTestIdEnum.HERO_BODY_FLEX_BOX}
          >
            <ContainerRelativeAvatar>
              <ContainerAbsoluteAvatar>
                <RoundImage src={USER_AVATAR.src} alt={USER_AVATAR.alt} />
              </ContainerAbsoluteAvatar>
            </ContainerRelativeAvatar>

            <div className="min-h-[200px] pt-[80px] pb-7 md:ml-4 md:py-3">
              <div className="py-5 text-center md:py-3 md:text-left">
                <h1 className="text-2xl">{USER_CONSTANTS.name}</h1>
                <small className="text-xs">
                  <strong>{USER_CONSTANTS.desciption}</strong>
                </small>
              </div>

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
            </div>
          </div>
        </div>
      </ShadedContainer>
    </Box>
  );
}

export default Hero;
