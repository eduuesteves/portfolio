import { useState, useEffect } from "react";
import { GitHubUserStats } from "../@types";

const GITHUB_USERNAME = "eduuesteves";

const CURATED_STATS: GitHubUserStats = {
    publicRepos: 12,
    followers: 10,
    publicGists: 0,
};

// Certifique-se de que a função possui a palavra 'export' na declaração
export function useGitHubUser() {
    const [stats, setStats] = useState<GitHubUserStats>(CURATED_STATS);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchGitHubData() {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
                
                if (!response.ok) {
                    throw new Error(`Erro ao buscar dados do GitHub: ${response.statusText}`);
                }

                const data = await response.json();

                if (isMounted) {
                    setStats({
                        publicRepos: typeof data.public_repos === "number" ? data.public_repos : CURATED_STATS.publicRepos,
                        followers: typeof data.followers === "number" ? data.followers : CURATED_STATS.followers,
                        publicGists: typeof data.public_gists === "number" ? data.public_gists : CURATED_STATS.publicGists,
                    });
                    setError(null);
                }
            } catch (err: unknown) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "Erro desconhecido ao carregar GitHub");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchGitHubData();

        return () => {
            isMounted = false;
        };
    }, []);

    return { stats, loading, error };
}