import { useState } from 'react';
import { MovieCard } from './MovieCard';
import { MovieDetails } from './MovieDetails';
import { Movie } from '../types';

interface MovieGridProps {
  title: string;
  movies: Movie[];
}

export function MovieGrid({ title, movies }: MovieGridProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    </section>
  );
}