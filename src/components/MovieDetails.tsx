import { X, Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
}

export function MovieDetails({ movie, onClose }: MovieDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded- lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 z-10"
          >
            <X size={24} />
          </button>
          <div className="md:flex">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
              <div className="space-y-4">
                <p className="text-gray-600">{movie.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Release Year</h3>
                    <p>{movie.year}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Genre</h3>
                    <p>{movie.genre}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Director</h3>
                    <p>{movie.director}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Rating</h3>
                    <div className="flex items-center gap-1">
                      <Star size={18} className="text-yellow-500 fill-current" />
                      <p>{movie.rating}/10</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cast</h3>
                  <p>{movie.cast.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}