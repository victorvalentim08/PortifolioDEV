"use client";
import { motion } from "framer-motion";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaDatabase, 
  FaGitAlt, FaGithub, FaPython, FaLinux, FaNetworkWired, FaTools,
  FaFileExcel, FaBuilding 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiPostgresql, SiCplusplus, 
  SiPostman 
} from 'react-icons/si'; 
import { VscTerminalLinux, VscCode } from 'react-icons/vsc';
import { MdLanguage } from 'react-icons/md';

const experiences = [
  {
    year: "2025",
    title: "Suporte Técnico N1",
    company: "Conet Telecom",
    description: "Atendimento e resolução de problemas técnicos na conexão da rede em Vlans , realizando SOPS , manutenções preventivas e corretivas e provisionamento de equipamentos.",
    techs: ["Infra", "Redes", "Suporte"] 
  },
  {
    year: "2025",
    title: "Curso de Extensão em Desenvolvimento Full Stack",
    company: "UECE (Universidade Estadual do Ceará)",
    description: "Trajetória que consolidou minha capacidade de atuar como Desenvolvedor Full Stack, transitando com segurança entre cliente, servidor e banco de dados para entregar soluções funcionais e escaláveis.",
    techs: ["React", "Node.js", "PostgreSQL", "Banco de Dados", "Git", "GitHub", "Inglês Técnico"] 
  },
  {
    year: "2024 - Atualmente",
    title: "Bacharelado em Ciência da Computação",
    company: "Bolsista ProUni 100%",
    description: "Entrei na faculdade após realizar o ENEM e conquistar uma bolsa integral pelo ProUni, onde estou aprofundando meus conhecimentos em ciência da computação e desenvolvimento de software.",
    techs: ["Python", "PHP", "C / C++", "TKinter", "Linux"] 
  },
  {
    year: "2020 - 2022",
    title: "Ensino Médio , Técnico em Informática & Estágio",
    company: "Vicunha Têxtil / Curso Técnico",
    description: "Durante meu Ensino Médio realizei o curso de Tecnico de Informática durante todo o período e tive meu primeiro contato prático com o mundo da tecnologia atuando como estagiário analista de sistemas",
    techs: ["Suporte em Sistemas", "TOTVS", "MySQL (SQL)", "Empreendedorismo"] 
  }
];

const iconMap: Record<string, React.ReactNode> = {
  // --- Tecnologias Principais ---
  "React": <FaReact className="text-blue-400" />,
  "JavaScript (ES6+)": <FaJs className="text-yellow-400" />,
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "PHP": <FaPhp className="text-purple-400" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "Python": <FaPython className="text-yellow-500" />,
  "C / C++": <SiCplusplus className="text-blue-600" />,
  
  // --- Banco de Dados & Infra ---
  "PostgreSQL": <SiPostgresql className="text-blue-400" />,
  "MySQL (SQL)": <FaDatabase className="text-sky-600" />,
  "Banco de Dados": <FaDatabase className="text-slate-400" />,
  "Linux": <FaLinux className="text-white" />,
  "Redes": <FaNetworkWired className="text-green-400" />,
  "Infra": <VscTerminalLinux className="text-slate-300" />,
  "Vlans": <FaNetworkWired className="text-blue-300" />,
  
  // --- Ferramentas & Soft Skills (Ajustados) ---
  "Git": <FaGitAlt className="text-orange-600" />,
  "GitHub": <FaGithub className="text-white" />,
  "Inglês Técnico": <MdLanguage className="text-emerald-400" />,
  "Suporte": <FaTools className="text-slate-400" />,
  "Suporte em Sistemas": <VscCode className="text-blue-400" />,
  "TOTVS": <FaBuilding className="text-red-600" />, 
  "TKinter": <VscCode className="text-yellow-600" />,
  "Empreendedorismo": <FaFileExcel className="text-green-600" />, 
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