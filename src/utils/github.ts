export interface GitHubRepoStats {
  stars: number;
  forks: number;
  language: string | null;
  updatedAt?: string;
}

const statsCache = new Map<string, GitHubRepoStats>();

/**
 * Extrae owner y repo de una URL de GitHub.
 * Ejemplo: "https://github.com/Pabl0Aranda/Astro-Portfolio" -> { owner: "Pabl0Aranda", repo: "Astro-Portfolio" }
 */
export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("github.com")) return null;
    const parts = parsed.pathname.replace(/^\/|\/$/g, "").split("/");
    if (parts.length >= 2 && parts[0] && parts[1]) {
      return { owner: parts[0], repo: parts[1] };
    }
  } catch {
    return null;
  }
  return null;
}

/**
 * Obtiene métricas del repositorio público de GitHub en tiempo de compilación.
 * Cuenta con timeout rápido y fallback garantizado para no bloquear builds.
 */
export async function getGitHubStats(repoUrl: string): Promise<GitHubRepoStats | null> {
  const parsed = parseGitHubUrl(repoUrl);
  if (!parsed) return null;

  const cacheKey = `${parsed.owner}/${parsed.repo}`;
  if (statsCache.has(cacheKey)) {
    return statsCache.get(cacheKey)!;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Astro-Portfolio-Build",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const stats: GitHubRepoStats = {
        stars: data.stargazers_count || 0,
        forks: data.forks_count || 0,
        language: data.language || null,
        updatedAt: data.updated_at,
      };
      statsCache.set(cacheKey, stats);
      return stats;
    }
  } catch {
    // Si la API falla o excede el límite de cuota (rate limit) de GitHub, fallback silencioso
  }

  return null;
}
