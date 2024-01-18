// Mocks
import { CLASS_NAME_CONTAINER } from "../../constants/ClassNameConstants";
import { projects } from "../../mocks/PortfolioMocks";
import { Section } from "../../shared/Layout";

export default function Portfolio() {
  return (
    <Section>
      <div className={CLASS_NAME_CONTAINER}>
        <div
          className="flex justify-between gap-3 flex-wrap 
        "
        >
          {projects.map((project, index) => (
            <div className="card bg-slate-600 w-1/3 p-3" key={index}>
              <div className="cover">
                <img src={project.cover} alt="" width="100%" />
              </div>
              <h2 className="title">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
