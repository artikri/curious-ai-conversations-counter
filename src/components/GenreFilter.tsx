
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface GenreFilterProps {
  genres: string[];
  selectedGenres: string[];
  onGenreSelect: (genres: string[]) => void;
}

const GenreFilter = ({ genres, selectedGenres, onGenreSelect }: GenreFilterProps) => {
  const toggleGenre = (genre: string) => {
    const newSelectedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];
    
    onGenreSelect(newSelectedGenres);
  };

  const clearFilters = () => {
    onGenreSelect([]);
  };

  return (
    <div className="bg-card rounded-md p-4 border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          <h3 className="font-medium">Filter by Genre</h3>
        </div>
        {selectedGenres.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear
          </Button>
        )}
      </div>
      
      <ScrollArea className="h-full max-h-[200px] pr-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center space-x-2">
              <Checkbox 
                id={`genre-${genre}`} 
                checked={selectedGenres.includes(genre)}
                onCheckedChange={() => toggleGenre(genre)}
              />
              <Label 
                htmlFor={`genre-${genre}`}
                className="text-sm cursor-pointer"
              >
                {genre}
              </Label>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GenreFilter;
