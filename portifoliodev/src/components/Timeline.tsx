"use client";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const experiences = [
  {
    year: "2025",
    title: "Suporte Técnico (Estágio)",
    company: "Conet Telecom",
    description: "Atendimento e resolução de problemas técnicos em infraestrutura de rede.",
    techs: ["Infra", "Redes", "Suporte"] 
  },
  {
    year: "2023",
    title: "Bacharelado em Ciência da Computação",
    company: "Bolsista ProUni",
    description: "Foco em algoritmos e desenvolvimento de software moderno.",
    techs: ["React", "Node.js", "TypeScript", "Tailwind CSS"] 
  },
  {
    year: "2022",
    title: "Técnico em Informática & Estágio",
    company: "Vicunha Têxtil / Curso Técnico",
    description: "Primeiro contato com o mundo dev e suporte industrial.",
    techs: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "MySQL (SQL)"] 
  }
];

const iconMap: Record<string, React.ReactNode> = {
  "React": <FaReact className="text-blue-400" />,
  "JavaScript (ES6+)": <FaJs className="text-yellow-400" />,
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "PHP": <FaPhp className="text-purple-400" />,
  "MySQL (SQL)": <FaDatabase className="text-sky-600" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
};

export default function Timeline() {
  return (
    <section id="trajetoria" className="py-20 border-t border-slate-900">
      <h2 className="text-3xl font-bold text-white mb-12">Minha Trajetória</h2>
      
      <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 group"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-800 border-4 border-slate-950 group-hover:bg-blue-600 transition-colors"></div>
            
            <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">{exp.year}</span>
            <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
            <p className="text-slate-400 font-medium">{exp.company}</p>
            
            <p className="text-slate-500 text-sm mt-3 max-w-xl leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              {exp.techs.map((tech) => (
                <div key={tech} className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800/50 group-hover:border-blue-500/30 transition-all">
                  <span className="text-lg">
                    {iconMap[tech] || <FaDatabase className="opacity-50" />}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter italic">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}