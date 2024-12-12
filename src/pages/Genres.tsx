import { MovieGrid } from '../components/MovieGrid';
import { movies } from '../data/movies';

export function Genres() {
  return (
    <div id="genres" className="container mx-auto px-4 py-12 space-y-16">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Movie Genres</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <MovieGrid title="Action Movies" movies={movies.action} />
        <MovieGrid title="Comedy Movies" movies={movies.comedy} />
        <MovieGrid title="Sci-Fi Movies" movies={movies.scifi} />
        <MovieGrid title="Romance Movies" movies={movies.romance} />
      </div>
    </div>
  );
}