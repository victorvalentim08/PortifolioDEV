"use client";
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  const [filter, setFilter] = useState("Todos");
  const filteredProjects = filter === "Todos" ? projects : projects.filter(p => p.category === filter);
  const categories = ["Todos", "Comercial", "Pessoal", "Acadêmico"];

  return (
    <main className="container-layout min-h-screen py-10">
      <Hero />
      
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>        
        <nav className="flex gap-3 mb-10">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-button ${filter === cat ? 'filter-button-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </nav>
        <div className="projects-grid">
          {filteredProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </section>

      <Skills />
      <Footer />
    </main>
  );
}