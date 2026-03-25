"use client";
import React from 'react';
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMysql, SiPrisma } from 'react-icons/si';

const iconMap: Record<string, React.ReactNode> = {  "React": <FaReact className="text-blue-400" />,
  "JavaScript (ES6+)": <FaJs className="text-yellow-400" />,
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "PHP": <FaPhp className="text-purple-400" />,
  "PostgreSQL": <SiPostgresql className="text-blue-400" />,
  "MySQL (SQL)": <SiMysql className="text-sky-600" />,
  "Prisma": <SiPrisma className="text-teal-400" />,
  "Git": <FaGitAlt className="text-red-500" />,
};

export default function Skills() {
  return (
    <section className="py-20 border-t border-slate-900">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Habilidades Técnicas</h2>
        <p className="text-slate-400">Tecnologias e ferramentas que utilizo para desenvolver soluções.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.article 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-3">
              {category.title}
            </h3>
            
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="text-xl">
                    {iconMap[skill] || <FaDatabase className="text-slate-600" />}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}