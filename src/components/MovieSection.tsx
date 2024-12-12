import { useState } from 'react';
import { MovieCard } from './MovieCard';
import { MovieDetails } from './MovieDetails';
import { Movie } from '../types';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

export function MovieSection({ title, movies }: MovieSectionProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center">{title}</h2>
      <div className="space-y-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onViewDetails={setSelectedMovie}
          />
        ))}
      </div>
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}