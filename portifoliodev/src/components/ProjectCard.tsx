"use client";
import { motion } from "framer-motion"; 
import { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article 
      // Configurações da animação
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card-project group"
    >
      <span className="text-xs font-bold text-blue-500 uppercase tracking-tighter bg-blue-500/10 px-2 py-1 rounded">
        {project.category}
      </span>
      
      <h3 className="text-xl font-bold text-white mt-4 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm my-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
      <a 
        href={project.repoUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 text-sm font-semibold hover:text-blue-400 inline-flex items-center gap-1"
      >
        Ver repositório →
      </a>
    </motion.article>
  );
}