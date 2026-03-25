import { socialLinks } from "../data/social";
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Mapeamento simples para os ícones
const iconMap: Record<string, React.ReactNode> = {
  "GitHub": <FaGithub />,
  "LinkedIn": <FaLinkedin />,
  "Email": <FaEnvelope />,
};

export default function Footer() {
  return (
    <footer className="py-16 mt-16 border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Lado Esquerdo: Call to Action e Links */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Contatos & Redes</h3>
          <p className="text-slate-400 max-w-md">
            Sinta-se à vontade para se conectar ou enviar uma proposta. 
            Estou disponível para novos desafios.
          </p>
          
          <nav className="mt-6">
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 hover:border-blue-500 hover:text-white transition-all text-sm font-medium"
                  >
                    <span className="text-xl text-blue-500">
                      {iconMap[link.label]}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="text-slate-500 text-sm md:text-right space-y-1">
          <p className="text-slate-300 font-medium">Victor Hugo Valentim</p>
          <p>Estudande de Ciência da Computação</p>
          <p>Técnico em Informática desde 2022.</p>
          <p className="pt-4 opacity-50">
            &copy; {new Date().getFullYear()} — Desenvolvido por Victor Valentim.
          </p>
        </div>

      </div>
    </footer>
  );
}