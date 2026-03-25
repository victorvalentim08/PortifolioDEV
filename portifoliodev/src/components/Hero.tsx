export default function Hero() {
  return (
    <section>
      <div>
        <span>Bolsista ProUni | 4º Período Ciência da Computação</span>
      </div>

      <header>
        <h1>Victor Hugo Valentim</h1>
        <p>Desenvolvedor Fullstack</p>
      </header>

      <article>
        <p>
          Base técnica em informática consolidada desde 2022. 
          Experiência prática em soluções escaláveis com 
          <strong> React, Node.js e SQL</strong>.
        </p>
      </article>

      <nav>
        <ul>
          <li>
            <a href="#contato">Vamos conversar?</a>
          </li>
          <li>
            <a 
              href="/curriculo-victor-valentim.pdf" 
              download="Curriculo_Victor_Valentim.pdf"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV (PDF)
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}