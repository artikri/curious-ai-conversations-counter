
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Movie } from "@/types/movie";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieTrailerProps {
  movie: Movie;
}

const MovieTrailer = ({ movie }: MovieTrailerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {isPlaying ? (
          <div className="absolute inset-0 bg-black">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full h-8 w-8 p-0"
              onClick={() => setIsPlaying(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            <iframe
              src={`${movie.trailerUrl}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        ) : (
          <>
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Button 
                variant="outline" 
                className="bg-black/50 border-white text-white hover:bg-white hover:text-black"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Play Trailer
              </Button>
            </div>
            {movie.isNew && (
              <Badge className="absolute top-2 left-2 bg-red-500">New</Badge>
            )}
          </>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
          <span className="text-sm text-muted-foreground">{movie.releaseYear}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{movie.description}</p>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0 flex flex-wrap gap-1">
        {movie.genres.slice(0, 3).map((genre) => (
          <Badge key={genre} variant="outline" className="text-xs">
            {genre}
          </Badge>
        ))}
        {movie.genres.length > 3 && (
          <Badge variant="outline" className="text-xs">
            +{movie.genres.length - 3}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default MovieTrailer;
