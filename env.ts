const GITHUB_API_BASE_URL = "https://api.github.com/search";
export type SearchingType = 'users' | 'repositories';

export const API_ENDPOINTS: Record<SearchingType, string> = {
  users: `${GITHUB_API_BASE_URL}/users`,
  repositories: `${GITHUB_API_BASE_URL}/repositories`,
};