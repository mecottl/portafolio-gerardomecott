const GITHUB_USERNAME = "mecottl";

export interface GithubRepo {
  name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  created_at: string;
}

/**
 * Trae TODOS los repos públicos del usuario en UNA sola llamada (evita el límite
 * de rate-limit de GitHub, que es de 60 requests/hora sin autenticación).
 * Se ejecuta en build time (dentro del frontmatter de un .astro), no en el navegador.
 */
async function fetchAllRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
    );
    if (!res.ok) {
      console.warn(`[github] No se pudo obtener la lista de repos (status ${res.status}).`);
      return [];
    }
    return await res.json();
  } catch (err) {
    console.warn("[github] Error obteniendo repos de GitHub:", err);
    return [];
  }
}

/**
 * Dado un arreglo de nombres de repos (los que tú marcaste como "featured"),
 * devuelve sus datos reales de GitHub. Si un nombre no existe, avisa en consola
 * durante el build para que lo notes, pero no rompe el sitio.
 */
export async function fetchFeaturedRepos(names: string[]): Promise<Map<string, GithubRepo>> {
  const all = await fetchAllRepos();
  const byName = new Map(all.map((r) => [r.name.toLowerCase(), r]));

  const result = new Map<string, GithubRepo>();
  for (const name of names) {
    const repo = byName.get(name.toLowerCase());
    if (repo) {
      result.set(name, repo);
    } else {
      console.warn(
        `[github] Repo "${name}" no encontrado en github.com/${GITHUB_USERNAME}. Revisa el nombre en src/data/projects.ts`
      );
    }
  }
  return result;
}

/** URL de la tarjeta de vista previa (social preview) que GitHub genera automáticamente para cada repo. */
export function socialPreviewImage(repoName: string): string {
  return `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repoName}`;
}
