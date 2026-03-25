export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  deployUrl?: string; 
  category: 'Comercial' | 'Pessoal' | 'Acadêmico';
}