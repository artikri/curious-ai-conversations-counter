
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import MovieTrailer from "@/components/MovieTrailer";
import GenreFilter from "@/components/GenreFilter";
import { fetchMovies } from "@/lib/api";
import { Movie } from "@/types/movie";

const Index = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [currentIndustry, setCurrentIndustry] = useState<"hollywood" | "bollywood">("hollywood");
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies(currentIndustry);
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        toast({
          title: "Error",
          description: "Failed to load movies. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [currentIndustry]);

  useEffect(() => {
    if (selectedGenres.length === 0) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        selectedGenres.some((genre) => movie.genres.includes(genre))
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenres, movies]);

  const handleGenreSelect = (genres: string[]) => {
    setSelectedGenres(genres);
  };

  const handleIndustryChange = (industry: "hollywood" | "bollywood") => {
    setCurrentIndustry(industry);
  };

  // Extract all unique genres from the movies
  const allGenres = Array.from(
    new Set(movies.flatMap((movie) => movie.genres))
  ).sort();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-lg border-b px-4 py-3">
        <h1 className="text-2xl font-bold text-center">
          Movie Trailers
        </h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Industry Selection Tabs */}
        <Tabs 
          defaultValue="hollywood" 
          className="mb-6"
          onValueChange={(value) => handleIndustryChange(value as "hollywood" | "bollywood")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hollywood">Hollywood</TabsTrigger>
            <TabsTrigger value="bollywood">Bollywood</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Genre Filter Component */}
        <div className="mb-6">
          <GenreFilter 
            genres={allGenres} 
            selectedGenres={selectedGenres} 
            onGenreSelect={handleGenreSelect} 
          />
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={`skeleton-${index}`} className="overflow-hidden">
                <div className="aspect-video bg-muted animate-pulse" />
                <CardContent className="p-4">
                  <div className="h-6 bg-muted animate-pulse rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
                </CardContent>
              </Card>
            ))
          ) : filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieTrailer key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No movies found with the selected genres. Try selecting different genres.
              </p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setSelectedGenres([])}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <footer className="py-6 border-t text-center text-sm text-muted-foreground">
        <p>© 2025 Movie Trailers App</p>
      </footer>
    </div>
  );
};

export default Index;
