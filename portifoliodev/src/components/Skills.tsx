import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section>
      <header>
        <h2>Minhas Habilidades Técnicas</h2>
        <p>Tecnologias e ferramentas que utilizo para desenvolver soluções.</p>
      </header>

      <div>
        {skillCategories.map((category, index) => (
          <article key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}