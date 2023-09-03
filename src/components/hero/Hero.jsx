import PropTypes from "prop-types";
import "./hero.css";
import DisplayFlex from "../layout/DisplayFlex";
import GlassCard from "../global/GlassCard";
import RoundImage from "../global/RoundImage";
import Container from "../layout/Container";
import FlyingImage from "../global/FlyingImage";
import TittleSecondary from "../global/TittleSecondary";
import SimpleText from "../global/SimpleText";
import { useState } from "react";

// Images
import avatar from "./../../assets/images/avatar.jfif";
import flyingImageHero from "./../../assets/images/fly-image-hero.svg";
import Button from "../global/Button";
import FlexBasis from "../layout/FlexBasis";

function Hero() {
  const [heroTittle] = useState("Analista desenvolvedor");
  const [heroDescription] = useState(
    "Sou um Desenvolvedor Fullstack com experiência em tecnologias como AWS, Node.js, TypeScript, Python, AdonisJS e MySQL. Meu foco é criar soluções eficientes e inovadoras. Tenho trabalhado em projetos que envolvem CRMs, integrações com RdStation e Sales Force, e liderança em um Learning Management System (LMS) de alto desempenho. Utilizo ferramentas como Laravel Telescope, Laravel Pint e PEST 2.0 para garantir qualidade e confiabilidade. Estou sempre em busca de novos desafios para entregar resultados excepcionais."
  );

  const [buttonText] = useState("Me Conheça");

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
            <DisplayFlex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={20}
            >
              <FlexBasis flexBasis={2}>
                <RoundImage
                  src={avatar}
                  width={200}
                  height={200}
                  textAlign={"center"}
                />
                <TittleSecondary
                  text={heroTittle}
                  fontSize={32}
                  textAlign={"center"}
                />
                <SimpleText text={heroDescription} />
                <Button text={buttonText} width={200} height={50} />
              </FlexBasis>

              <FlexBasis flexBasis={2}>
                <GlassCard>
                  <DisplayFlex alignItems={"center"} justifyContent={"center"}>
                    <FlyingImage src={flyingImageHero} />
                  </DisplayFlex>
                </GlassCard>
              </FlexBasis>
            </DisplayFlex>
          </GlassCard>

          {/* <FlyingImage src={flyingImageHero} /> */}
        </DisplayFlex>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Hero;
