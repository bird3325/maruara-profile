export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: 'webapp' | 'mobile' | 'automation' | 'content';
  technologies: string[];
  thumbnailUrl: string;
  screenshots: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'ongoing';
  featured: boolean;
  completionDate: string;
  role: string;
  teamSize: number;
  problem: string;
  solution: string;
  challenges: string[];
  results: string[];
  learnings: string;
}
