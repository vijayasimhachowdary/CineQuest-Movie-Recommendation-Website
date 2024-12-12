export function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-sm text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} CineQuest. All rights reserved.</p>
      </div>
    </footer>
  );
}