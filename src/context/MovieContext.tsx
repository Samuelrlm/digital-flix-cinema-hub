import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { seedMovies } from "@/data/movies";
import type { Movie } from "@/data/movies";

interface MovieContextValue {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, "id">) => void;
  updateMovie: (id: number, updates: Partial<Movie>) => void;
  deleteMovie: (id: number) => void;
}

const MovieContext = createContext<MovieContextValue | undefined>(undefined);

const STORAGE_KEY = "flyflix-movies";

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored) as Movie[];
    } catch {
      // fallback to seed data
    }
    return seedMovies;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    } catch {
      // storage unavailable; keep state in memory only
    }
  }, [movies]);

  const addMovie = (movie: Omit<Movie, "id">) => {
    setMovies(prev => [...prev, { ...movie, id: Date.now() }]);
  };

  const updateMovie = (id: number, updates: Partial<Movie>) => {
    setMovies(prev => prev.map(m => (m.id === id ? { ...m, ...updates } : m)));
  };

  const deleteMovie = (id: number) => {
    setMovies(prev => prev.filter(m => m.id !== id));
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, updateMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
};
