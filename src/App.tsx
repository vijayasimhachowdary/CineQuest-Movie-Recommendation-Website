import { useState } from 'react';
import { Header } from './components/Header';
import { BackgroundSlider } from './components/BackgroundSlider';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Genres } from './pages/Genres';
import { TopMovies } from './pages/TopMovies';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'genres':
        return <Genres />;
      case 'top-movies':
        return <TopMovies />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <BackgroundSlider />
      <div className="relative z-10">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        {renderPage()}
        <Feedback />
        <Footer />
      </div>
    </div>
  );
}

export default App;