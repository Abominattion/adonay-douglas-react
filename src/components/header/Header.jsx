import RoundImage from "../global/RoundImage";
import "./header.css";

// Images
import appLogo from "./../../assets/images/icons/logo.png";
import DisplayFlex from "../layout/DisplayFlex";
import Container from "../layout/Container";
import TittleSecondary from "../global/TittleSecondary";
import Anchor from "../global/Anchor";

function Header() {
  const anchors = [
    { href: "#root", text: "Home" },
    { href: "#sobre", text: "Sobre" },
    { href: "#portifolio", text: "Portifólio" },
    { href: "#contato", text: "Contato" },
  ];

  return (
    <header>
      <Container>
        <DisplayFlex alignItems={"center"} justifyContent={"space-between"}>
          <DisplayFlex alignItems={"center"} gap={10}>
            <RoundImage src={appLogo} width={40} height={40} />
            <TittleSecondary text={"Adonay Douglas"} fontSize={32} />
          </DisplayFlex>

          <DisplayFlex alignItems={"center"} gap={10}>
            {anchors.map((anchor, index) => (
              <Anchor href={anchor.href} text={anchor.text} key={index} />
            ))}
          </DisplayFlex>
        </DisplayFlex>
      </Container>
    </header>
  );
}

export default Header;
