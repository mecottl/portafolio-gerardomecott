/** Forma final que consume <ProjectCard />. */
export interface Project {
  name: string;
  description: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  tech: string[];
  inProgress?: boolean;
}

export interface FeaturedRepo {
  repo: string;
  name?: string;
  description?: string;
  demoUrl?: string;
  image?: string;
  tech?: string[];
  inProgress?: boolean;
}

// Orden manual: de más nuevo a más viejo.
export const featuredRepos: FeaturedRepo[] = [
  {
    repo: "app-modula",
    name: "Modula",
    description: "Configurador de cotizaciones para proyectos inmobiliarios.",
    image: "/projects/modula.png",
    tech: ["Next.js", "Prisma", "Supabase", "Stripe"],
    inProgress: true,
  },
  {
    repo: "privas-magazine",
    name: "Privas Magazine",
    description: "Plataforma editorial de la revista Privas.",
    image: "/projects/privasmagazine.png",
    tech: ["Angular", "Supabase"],
    inProgress: true,
  },
  {
    repo: "project-monorepo-bibliohub",
    name: "BiblioHub",
    description: "Plataforma para descubrir, organizar y compartir libros.",
    image: "/projects/bibliohub.png",
    tech: ["Angular", "NestJS", "TypeORM", "PostgreSQL"],
    inProgress: true,
  },
  {
    repo: "app-whoami",
    name: "WhoAmI",
    description: "Creador de plantillas para mostrar tu identidad y compartirla en redes sociales.",
    image: "/projects/whoami.png",
    demoUrl: "https://whoami.vercel.app",
    tech: ["Angular", "NestJS", "Prisma", "Supabase"],
  },
  {
    repo: "app-landing-privastravel",
    name: "Privas Travel",
    description: "Rediseño de la página de Privas Travel, agencia de viajes.",
    image: "/projects/privastravel.png",
    demoUrl: "https://privastravel.vercel.app",
    tech: ["React", "Vite", "Tailwind CSS"],
    inProgress: true,
  },
  {
    repo: "app-when2play",
    name: "When2Play",
    description: "Encuentra el mejor horario para tu equipo: salas por código, calendario táctil y mapa de calor.",
    image: "/projects/when2play.png",
    demoUrl: "https://when2play.vercel.app",
    tech: ["Astro", "TypeScript", "PostgreSQL"],
  },
  {
    repo: "app-recurstack",
    name: "RecurStack",
    description: "Biblioteca de herramientas y recursos para desarrolladores web.",
    image: "/projects/recurstack.png",
    demoUrl: "https://recur-stack.vercel.app",
    tech: ["Astro", "TypeScript", "PostgreSQL"],
  },
  {
    repo: "app-noteflow",
    name: "NoteFlow",
    description: "Bloc de notas con predicción de texto impulsada por IA.",
    image: "/projects/noteflow.png",
    demoUrl: "https://noteflow3.vercel.app",
    tech: ["Express", "Supabase"],
  },
  {
    repo: "app-pos-mayaclean",
    name: "Mayaclean",
    description: "Sistema POS web para ventas y administración de una lavandería.",
    image: "/projects/mayaclean.png",
    demoUrl: "https://mayaclean.vercel.app",
    tech: ["JavaScript", "Express", "PostgreSQL"],
  },
  {
    repo: "app-landing-scprojects",
    name: "SCProjects",
    description: "Rediseño de la página de SCProjects, firma de arquitectura.",
    image: "/projects/scprojects.png",
    demoUrl: "https://scprojects.vercel.app",
    tech: ["Astro", "TypeScript"],
  },
];