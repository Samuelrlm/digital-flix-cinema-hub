
import { Link } from "react-router-dom";
import { Film, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="h-6 w-6 text-digitalflix-purple" />
          <Link to="/" className="text-xl font-bold text-digitalflix-light">
            FLY<span className="text-digitalflix-purple">Flix</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/movies" className="text-foreground/80 hover:text-foreground transition-colors">
            Movies
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="bg-digitalflix-purple hover:bg-digitalflix-purple/90">
            <Link to="/add-movie">
              <Plus className="mr-2 h-4 w-4" />
              Add Movie
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
