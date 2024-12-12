import { Hero } from '../components/Hero';
import { MovieGrid } from '../components/MovieGrid';
import { movies } from '../data/movies';

export function Home() {
  return (
    <div id="home" className="space-y-12">
      <Hero />
      <div className="container mx-auto px-4">
        <MovieGrid title="Featured Movies" movies={[...movies.action, ...movies.comedy, ...movies.scifi, ...movies.romance].slice(0, 8)} />
      </div>
    </div>
  );
}