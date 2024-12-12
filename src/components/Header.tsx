import { Film } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'genres', label: 'Genres' },
    { id: 'top-movies', label: 'Top Movies' },
    { id: 'feedback', label: 'Feedback' }
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    if (id === 'feedback') {
      document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black bg-opacity-50 text-white shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Film size={32} className="text-sky-300" />
            <h1 className="text-3xl font-bold">CineQuest</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className={`text-lg hover:text-sky-300 transition-colors duration-200 ${
                      currentPage === id ? 'text-sky-300' : 'text-sky-100'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}