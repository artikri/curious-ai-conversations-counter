
export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  trailerUrl: string;
  releaseYear: number;
  genres: string[];
  industry: "hollywood" | "bollywood";
  isNew: boolean;
}
