
import { Film } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-border mt-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Film className="h-5 w-5 text-digitalflix-purple" />
            <span className="text-lg font-bold">
              FLY<span className="text-digitalflix-purple">Flix</span>
            </span>
          </div>
          
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/movies" className="text-gray-300 hover:text-white transition-colors">
              Movies
            </Link>
            <Link to="/add-movie" className="text-gray-300 hover:text-white transition-colors">
              Add Movie
            </Link>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FLY Flix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
