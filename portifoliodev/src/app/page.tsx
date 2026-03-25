import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer"; 

export default function Home() {
  const hasProjects = projects && projects.length > 0;

  return (
    <main>
      <Hero />
      <hr />
      <Skills />
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
            <p>Nenhum projeto cadastrado.</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}