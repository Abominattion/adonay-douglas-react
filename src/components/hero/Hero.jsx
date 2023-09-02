import PropTypes from "prop-types";
import "./hero.css";
import DisplayFlex from "../layout/DisplayFlex";
import GlassCard from "../global/GlassCard";
import RoundImage from "../global/RoundImage";
import Container from "../layout/Container";
import FlyingImage from "../global/FlyingImage";

// Images
import avatar from "./../../assets/images/avatar.jfif";
import flyingImageHero from "./../../assets/images/fly-image-hero.svg";
import TittleSecondary from "../global/TittleSecondary";
import SimpleText from "../global/SimpleText";

function Hero() {
  return (
    <div className="hero">
      <Container>
        <DisplayFlex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={20}
          height={"100vh"}
        >
          <GlassCard>
            <RoundImage
              src={avatar}
              width={200}
              height={200}
              textAlign={"center"}
            />
            <TittleSecondary
              text={"Analista desenvolvedor"}
              fontSize={32}
              textAlign={"center"}
            />
            <SimpleText
              text={
                "Sou desenvolvedor front-end e back-end. Tenho uma paixão séria por efeitos de interface do usuário," +
                "animações e criação de experiências de usuário intuitivas e dinâmicas. Vamos fazer algo especial."
              }
            />
          </GlassCard>

          <FlyingImage src={flyingImageHero} />
        </DisplayFlex>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Hero;
