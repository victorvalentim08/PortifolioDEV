"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="hero-section" 
    >
      <div className="hero-badge">Bolsista ProUni | 4º Período CC</div>
      <h1 className="hero-title">
        Victor Hugo <span className="text-blue-500">Valentim</span>
      </h1>
      <p className="text-slate-400 max-w-2xl text-lg">
        Desenvolvedor Fullstack focado em soluções escaláveis.
      </p>
    </motion.section>
  );
}