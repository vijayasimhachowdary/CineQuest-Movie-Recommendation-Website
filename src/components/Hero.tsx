import { Film } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative py-24 text-center text-white">
      <div className="container mx-auto px-4">
        <Film size={64} className="mx-auto mb-6 text-sky-300" />
        <h1 className="text-5xl font-bold mb-6">Welcome to CineQuest</h1>
        <p className="text-xl text-sky-100 max-w-2xl mx-auto">
          Discover the best movies across all genres. From action-packed adventures to heartwarming romances,
          we've got something for everyone.
        </p>
      </div>
    </div>
  );
}