import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const hasProjects = projects && projects.length > 0;

  return (
    <main>
      <header>
        <h1>Victor Hugo Valentim</h1>
        <p>Desenvolvedor Fullstack | 4º Período CC (ProUni)</p>
      </header>

      <hr />

      <section>
        <h2>Projetos em Destaque</h2>
        <div>
          {hasProjects ? (
            projects.map((project, index) => (
              <ProjectCard 
                key={`${project.title}-${index}`} 
                project={project} 
              />
            ))
          ) : (
            <p>Nenhum projeto cadastrado no momento.</p>
          )}
        </div>
      </section>

      <footer>
        <p>&copy; 2026 - Victor Hugo Valentim</p>
      </footer>
    </main>
  );
}