import "../style/globals.css";
import Navbar from "../components/Navbar"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="dark">
      <body className="bg-slate-950 text-slate-200 antialiased">
        <Navbar /> 
      
        {children}
      </body>
    </html>
  );
}