import { socialLinks } from "../data/social";

export default function Footer() {
  return (
    <footer>
      <hr />
      <section>
        <h3>Contatos & Redes</h3>
        <p>Sinta-se à vontade para se conectar ou enviar uma proposta.</p>
        
        <nav>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section>
        <p>
          &copy; {new Date().getFullYear()} - Victor Hugo Valentim. 
          Desenvolvido com Next.js e TypeScript.
        </p>
      </section>
    </footer>
  );
}