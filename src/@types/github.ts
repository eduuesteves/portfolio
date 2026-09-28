export interface GitHubUserStats {
  publicRepos: number;
  followers: number;
  publicGists: number;
  totalStars?: number;
}

export interface GitHubApiResponse {
  public_repos: number;
  followers: number;
  public_gists: number;
  [key: string]: unknown;
}