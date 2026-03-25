import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <header>
        <span>{project.category}</span>
        <h3>{project.title}</h3>
      </header>

      <p>{project.description}</p>

      <footer>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          Ver Código
        </a>
      </footer>
    </article>
  );
}