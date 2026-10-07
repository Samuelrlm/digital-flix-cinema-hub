
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { useMovies } from "@/context/MovieContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { movies } = useMovies();
  const featuredMovies = movies.slice(0, 4);
  const latestMovies = movies.slice(4, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

      <main className="flex-1 container py-12">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Movies</h2>
            <Link to="/movies" className="text-digitalflix-blue hover:text-digitalflix-blue/80 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Additions</h2>
            <Link to="/movies" className="text-digitalflix-blue hover:text-digitalflix-blue/80 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {latestMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
