
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Combining both movie lists from the homepage
const allMovies = [
  {
    id: 1,
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWV8ZW58MHx8MHx8fDA%3D",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi"
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fHww",
    year: 2014,
    rating: 8.6,
    genre: "Adventure"
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllfGVufDB8fDB8fHww",
    year: 2008,
    rating: 9.0,
    genre: "Action"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster: "https://images.unsplash.com/photo-1512113569142-8a60fccc7caa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllfGVufDB8fDB8fHww",
    year: 1994,
    rating: 8.9,
    genre: "Crime"
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllfGVufDB8fDB8fHww",
    year: 1994,
    rating: 9.3,
    genre: "Drama"
  },
  {
    id: 6,
    title: "The Godfather",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdmllfGVufDB8fDB8fHww",
    year: 1972,
    rating: 9.2,
    genre: "Crime"
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fHww",
    year: 2003,
    rating: 8.9,
    genre: "Adventure"
  },
  {
    id: 8,
    title: "Forrest Gump",
    poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vdmllfGVufDB8fDB8fHww",
    year: 1994,
    rating: 8.8,
    genre: "Drama"
  }
];

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMovies = allMovies.filter(movie => 
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
