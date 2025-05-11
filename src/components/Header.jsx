import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-serif text-primary">O-Touch / Palace</h1>
        <div className="space-x-4">
          {["Home", "About", "Rooms", "Restaurant", "Club", "Gallery", "Contact"].map(page => (
            <Link key={page} to={`/${page.toLowerCase()}`} className="text-gray-700 hover:text-primary">
              {page}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}