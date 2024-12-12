import { useEffect, useState } from 'react';

const backgrounds = [
  'https://wallpapercave.com/wp/wp7307741.jpg',
  'https://wallpapercave.com/wp/njNYLZ6.jpg',
  'https://wallpapercave.com/wp/wp1945939.jpg',
  'https://getwallpapers.com/wallpaper/full/7/9/0/829701-movie-backgrounds-1920x1080-smartphone.jpg',
  'https://www.pixelstalk.net/wp-content/uploads/2015/12/Batman-wallpaper-HD.jpg',
  'https://1.bp.blogspot.com/-_wQfd1Abto0/UsveVZdQx4I/AAAAAAACBRc/GngvTxUe5ps/s1600/1+Nenokkadine+Movie+Latest+Photos+(2).jpg'
];

export function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
    </div>
  );
}