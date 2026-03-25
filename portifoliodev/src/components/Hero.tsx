"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 

export default function Hero() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center gap-12 border-b border-slate-900">
      
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
          Bolsista ProUni | 4º Período Ciências da Computação
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Victor Hugo <span className="text-blue-500">Valentim</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          Desenvolvedor Fullstack focado em soluções escaláveis. 
          Minha jornada na tecnologia começou em 2022, e desde então venho 
          construindo sistemas modernos com foco em performance e experiência do usuário.
        </p>

        <div className="flex gap-4 pt-4">
          <a href="#projetos" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20">
            Ver Projetos
          </a>
          <a href="/curriculo.pdf" target="_blank" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-white font-bold rounded-lg transition-all">
            Baixar CV
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 rounded-3xl overflow-hidden border-2 border-blue-500/30">
          <Image 
            src="/foto de perfil.jpg" 
            alt="Victor Hugo Valentim"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full z-0 opacity-50"></div>
      </motion.div>

    </section>
  );
}