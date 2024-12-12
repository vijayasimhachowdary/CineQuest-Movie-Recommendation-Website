import { Info } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onViewDetails: (movie: Movie) => void;
}

export function MovieCard({ movie, onViewDetails }: MovieCardProps) {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-opacity-100">
      <div className="relative pb-[150%]">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{movie.title}</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>{movie.year}</p>
          <p className="line-clamp-1">Director: {movie.director}</p>
          <p className="text-sky-600">Rating: {movie.rating}/10</p>
        </div>
        <button
          onClick={() => onViewDetails(movie)}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition-colors duration-200"
        >
          <Info size={18} />
          View Details
        </button>
      </div>
    </div>
  );
}