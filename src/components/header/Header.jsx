import "./header.css";

// Layouts
import { Container, DisplayFlex } from "../layout/Layout";

// Globals
import { RoundImage, TittleSecondary, Link } from "../global/Globals";

// Images
import appLogo from "./../../assets/images/icons/logo.png";
import avatar from "./../../assets/images/avatar.png";

function Header() {
  const appName = "Adonay Douglas";
  const altLogo =
    "Logo do app, contendo um A branco com um gradiente de fundo azul e rosa";

  const anchors = [
    { href: "#root", text: "Home", active: "active-true" },
    { href: "#sobre", text: "Sobre", active: "active-false" },
    { href: "#portifolio", text: "Portifólio", active: "active-false" },
    { href: "#contato", text: "Contato", active: "active-false" },
  ];

  const socialMedias = [
    {
      href: "https://github.com/oh-dony",
      icon: "fab fa-github",
      text: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/adonay-douglas-2095291ab/",
      icon: "fa-brands fa-linkedin",
      text: "LinkedIn",
    },
    {
      href: "https://codepen.io/abominattion",
      icon: "fab fa-codepen",
      text: "CodePen",
    },
    {
      href: "mailto:adonay.douglas.profissional@gmail.com",
      icon: "fa-brands fa-google",
      text: "Email",
    },
  ];

  return (
    <>
      <div className="header-container"></div>
      <div className="container-body">
        <Container>
          <div className="container-master-relative">
            <DisplayFlex>
              <div className="content-realite-avatar">
                <div className="content-avatar-absolute">
                  <RoundImage src={avatar} alt={altLogo} />
                </div>
              </div>
              <div className="navbar">
                <DisplayFlex justifyContent="space-between" alignItems="center">
                  <div className="user-description">
                    <h1>{appName}</h1>
                    <small>Desenvolvedor FullStack</small>
                  </div>
                  <div className="nav-absolute">
                    {anchors.map((anchor, index) => (
                      <Link
                        href={anchor.href}
                        key={index}
                        fontSize={18}
                        className={anchor.active}
                      >
                        {anchor.text}
                      </Link>
                    ))}
                  </div>
                </DisplayFlex>

                <div className="social-medias">
                  <DisplayFlex
                    justifyContent="space-between"
                    flexDirection="column"
                  >
                    {socialMedias.map((anchor, index) => (
                      <Link
                        href={anchor.href}
                        key={index}
                        fontSize={18}
                        target="_blank"
                      >
                        <i className={anchor.icon}></i>
                        {anchor.text}
                      </Link>
                    ))}
                  </DisplayFlex>
                </div>
              </div>
            </DisplayFlex>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
