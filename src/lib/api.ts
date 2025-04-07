
import { Movie } from "@/types/movie";

// Mock data for Hollywood movies
const hollywoodMovies: Movie[] = [
  {
    id: "h1",
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    thumbnail: "https://picsum.photos/seed/batman/640/360",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama", "Thriller"],
    industry: "hollywood",
    isNew: false
  },
  {
    id: "h2",
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    thumbnail: "https://picsum.photos/seed/inception/640/360",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    releaseYear: 2010,
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    industry: "hollywood",
    isNew: false
  },
  {
    id: "h3",
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    thumbnail: "https://picsum.photos/seed/dune2/640/360",
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    releaseYear: 2024,
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    industry: "hollywood",
    isNew: true
  },
  {
    id: "h4",
    title: "The Avengers",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    thumbnail: "https://picsum.photos/seed/avengers/640/360",
    trailerUrl: "https://www.youtube.com/embed/eOrNdBpGMv8",
    releaseYear: 2012,
    genres: ["Action", "Adventure", "Sci-Fi"],
    industry: "hollywood",
    isNew: false
  },
  {
    id: "h5",
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    thumbnail: "https://picsum.photos/seed/interstellar/640/360",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    industry: "hollywood",
    isNew: false
  },
  {
    id: "h6",
    title: "Deadpool & Wolverine",
    description: "Deadpool teams up with Wolverine for an adventure that will shake up the Marvel Cinematic Universe.",
    thumbnail: "https://picsum.photos/seed/deadpool/640/360",
    trailerUrl: "https://www.youtube.com/embed/Yd47Z8HYf0Y",
    releaseYear: 2024,
    genres: ["Action", "Adventure", "Comedy"],
    industry: "hollywood",
    isNew: true
  }
];

// Mock data for Bollywood movies
const bollywoodMovies: Movie[] = [
  {
    id: "b1",
    title: "3 Idiots",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
    thumbnail: "https://picsum.photos/seed/3idiots/640/360",
    trailerUrl: "https://www.youtube.com/embed/xvszmNXdM4w",
    releaseYear: 2009,
    genres: ["Comedy", "Drama"],
    industry: "bollywood",
    isNew: false
  },
  {
    id: "b2",
    title: "Dangal",
    description: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    thumbnail: "https://picsum.photos/seed/dangal/640/360",
    trailerUrl: "https://www.youtube.com/embed/x_7YlGv9u1g",
    releaseYear: 2016,
    genres: ["Action", "Biography", "Drama", "Sport"],
    industry: "bollywood",
    isNew: false
  },
  {
    id: "b3",
    title: "Kalki 2898 AD",
    description: "Set in the future, the film depicts a post-apocalyptic world where a warrior embarks on a journey to find a divine being believed to be the next avatar of Vishnu.",
    thumbnail: "https://picsum.photos/seed/kalki/640/360",
    trailerUrl: "https://www.youtube.com/embed/pB3rrYYtiXw",
    releaseYear: 2024,
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    industry: "bollywood",
    isNew: true
  },
  {
    id: "b4",
    title: "Baahubali: The Beginning",
    description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between warring cousins.",
    thumbnail: "https://picsum.photos/seed/bahubali/640/360",
    trailerUrl: "https://www.youtube.com/embed/sOEg_YZQsTI",
    releaseYear: 2015,
    genres: ["Action", "Drama"],
    industry: "bollywood",
    isNew: false
  },
  {
    id: "b5",
    title: "Pathaan",
    description: "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.",
    thumbnail: "https://picsum.photos/seed/pathaan/640/360",
    trailerUrl: "https://www.youtube.com/embed/vqu4z34wENw",
    releaseYear: 2023,
    genres: ["Action", "Adventure", "Thriller"],
    industry: "bollywood",
    isNew: false
  },
  {
    id: "b6",
    title: "Stree 2",
    description: "The residents of Chanderi face a new supernatural threat and must band together to fight an ancient evil entity.",
    thumbnail: "https://picsum.photos/seed/stree2/640/360",
    trailerUrl: "https://www.youtube.com/embed/FgNl6wL-3cI",
    releaseYear: 2024,
    genres: ["Comedy", "Horror"],
    industry: "bollywood",
    isNew: true
  }
];

// Simulating an API request with a delay
export const fetchMovies = async (industry: "hollywood" | "bollywood"): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (industry === "hollywood") {
        resolve(hollywoodMovies);
      } else {
        resolve(bollywoodMovies);
      }
    }, 1000); // Simulate network delay
  });
};
