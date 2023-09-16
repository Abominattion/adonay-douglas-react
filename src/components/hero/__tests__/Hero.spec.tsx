import { render } from "@testing-library/react";

// Components
import Hero from "../Hero";

// Mock dos dados das redes sociais para testes
import { socialMedias } from "../../mocks/SocialMediasMock";

// Enum
import { HeaderTestIdEnum } from "../enum/HeroTestIDEnum";

// Constants
import { USER_CONSTANTS } from "../../constants/UserConstants";

describe("Testando o Hero", () => {
  it('deve ter a propriedade mobileFlexBox igual a "column"', () => {
    const { getByTestId } = render(<Hero />);
    const heroBodyFlexBox = getByTestId(HeaderTestIdEnum.HERO_BODY_FLEX_BOX);
    const mobileFlexBoxAttribute = heroBodyFlexBox.getAttribute("mobile");

    expect(mobileFlexBoxAttribute).toBe("column");
  });

  it("exibe o nome e a descrição do usuário", () => {
    const { getByText } = render(<Hero />);

    expect(getByText(USER_CONSTANTS.name)).toBeTruthy();
    expect(getByText(USER_CONSTANTS.desciption)).toBeTruthy();
  });

  it("renderiza links de redes sociais", () => {
    const { getByText, getAllByTestId } = render(<Hero />);

    socialMedias.forEach((redeSocial) => {
      expect(getByText(redeSocial.text)).toBeTruthy();
    });

    const iconMockSocialMedias = getAllByTestId(
      HeaderTestIdEnum.HERO_SOCIAL_MEDIA_ICON
    );

    expect(iconMockSocialMedias).toHaveLength(socialMedias.length);
  });
});
