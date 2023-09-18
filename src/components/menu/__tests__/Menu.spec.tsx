import { render, fireEvent } from "@testing-library/react";

// Enum
import { MenuTestIDEnum } from "../enum/MenuTestIDEnum";

// Components
import Menu from "../Menu";
import ToggleDarkMode from "../ToggleDarkMode";

// Mock LOGO_APP
jest.mock("./../../constants/ImagesPathConstants", () => ({
  LOGO_APP: {
    src: "logo.png",
    alt: "Logo Alt",
  },
}));

describe("Testando o Menu", () => {
  it("renders without errors", () => {
    const { getByAltText } = render(<Menu />);
    const logo = getByAltText("Logo Alt");

    expect(logo).toBeTruthy();
  });

  test("testandop ações de clique do botão do menu mobile", () => {
    const { getByTestId } = render(<Menu />);

    const mobileButton = getByTestId(MenuTestIDEnum.MOBILE_BUTTON);
    const navbar = getByTestId(MenuTestIDEnum.MENU_NAVBAR);

    // Navbar fechada
    expect(navbar.getAttribute("open_nav")).toBe("false");

    // Clique do botão
    fireEvent.click(mobileButton);

    // Navbar aberta
    expect(navbar.getAttribute("open_nav")).toBe("true");
  });

  it("testando cliqie no switch do darkmode", () => {
    const { getByLabelText } = render(<ToggleDarkMode />);
    const darkModeSwitch = getByLabelText("DarkMode") as HTMLInputElement;

    // Verifique se o estado inicial é false
    expect(darkModeSwitch.checked).toBe(false);

    // Clique no botão para ativar o modo escuro
    fireEvent.click(darkModeSwitch);

    // Verifique se o atributo checked está definido como true após o clique
    expect(darkModeSwitch.checked).toBe(true);

    // Clique novamente para desativar o modo escuro
    fireEvent.click(darkModeSwitch);

    // Verifique se o atributo checked está definido como false após o segundo clique
    expect(darkModeSwitch.checked).toBe(false);
  });
});
