// Global Style Components
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionHeaderContainer,
} from "../../shared/Layout";

// Constants
import { CLASS_NAME_CONTAINER } from "../../constants/ClassNameConstants";
import { STACK_CONSTANTS } from "../../constants/StacksConstants";

function About() {
  return (
    <Section className="about" id="sobre">
      <div className={CLASS_NAME_CONTAINER}>
        <SectionContainer>
          <SectionHeaderContainer>
            <SectionHeader>
              <h1>Me conheça</h1>
              <p>
                Tenho uma sólida experiência no campo de desenvolvimento desde
                2018, abrangendo tanto as áreas de Backend quanto Frontend.
                Durante esse tempo, concentrei-me na criação de soluções
                eficazes e na garantia da qualidade do código. Minhas
                habilidades incluem desenvolver aplicações robustas, bem como
                trabalhar com ferramentas e práticas da indústria para fornecer
                soluções de alta qualidade.
              </p>
            </SectionHeader>
          </SectionHeaderContainer>

          <div className="skill mt-10">
            {STACK_CONSTANTS.map((category, index) => (
              <div className="my-5" key={index}>
                <h3>{category.title}</h3>
                <p className="text-sm">{category.description}</p>
                <ul className="px-5 mt-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </Section>
  );
}

export default About;
