export interface RepoData {
  id: string;
  name: string;
  description: string;
  language: string;
  fetchDate: string;
  githubUrl: string;
  thumbnail: string;
  isFavorite?: boolean;
}
