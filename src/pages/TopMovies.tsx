import { MovieGrid } from '../components/MovieGrid';
import { movies } from '../data/movies';

const topMovies = [...movies.action, ...movies.comedy, ...movies.scifi, ...movies.romance]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 10);

export function TopMovies() {
  return (
    <div id="top-movies" className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Top Rated Movies</h1>
      <MovieGrid title="Top 10 Movies" movies={topMovies} />
    </div>
  );
}