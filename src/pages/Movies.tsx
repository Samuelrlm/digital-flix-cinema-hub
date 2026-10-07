
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { Input } from "@/components/ui/input";
import { useMovies } from "@/context/MovieContext";
import { Search } from "lucide-react";

const MoviesPage = () => {
  const { movies } = useMovies();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="bg-card py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">All Movies</h1>
          <p className="text-gray-400 mb-6">Browse our collection of amazing movies</p>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search movies by title or genre..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-400">No movies found matching your search</h3>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MoviesPage;
