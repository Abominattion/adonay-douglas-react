import "./header.css";

// Layouts
import { Box, Container, DisplayFlex, ShadedContainer } from "../layout/Layout";

// Globals
import { RoundImage, Link } from "../global/Globals";

// Images
import avatar from "./../../assets/images/avatar.png";

// Components
import { CoverHeader } from "./Components";

// Helpers
import { anchors, socialMedias } from "./../../helpers/mapHelper";

function Header() {
  const appName = "Adonay Douglas";
  const altLogo = "Logo contendo um A branco com o fundo azul e rosa";

  return (
    <Box>
      <CoverHeader />
      <ShadedContainer>
        <Container>
          <div className="container-master-relative">
            <DisplayFlex>
              <div className="content-realite-avatar">
                <div className="content-avatar-absolute">
                  <RoundImage src={avatar} alt={altLogo} />
                </div>
              </div>
              <div className="navbar">
                <DisplayFlex justifycontent="space-between" alignitems="center">
                  <div className="user-description">
                    <h1>{appName}</h1>
                    <small>
                      <strong>Desenvolvedor FullStack</strong>
                    </small>
                  </div>
                  <div className="nav-absolute">
                    {anchors.map((anchor, index) => (
                      <Link
                        href={anchor.href}
                        key={index}
                        fontSize={18}
                        className={anchor.active}
                      >
                        <i className={anchor.icon}></i>
                        {anchor.text}
                      </Link>
                    ))}
                    <button>Darkmode</button>
                  </div>
                </DisplayFlex>

                <div className="social-medias">
                  <DisplayFlex justifycontent="space-between">
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
      </ShadedContainer>
    </Box>
  );
}

export default Header;
