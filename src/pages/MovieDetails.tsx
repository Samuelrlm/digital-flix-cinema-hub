
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowLeft } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription, 
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { allMovies } from "./Movies";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we're using the static movie data
    const foundMovie = allMovies.find(m => m.id === Number(id));
    
    // Simulate loading delay
    setTimeout(() => {
      if (foundMovie) {
        setMovie(foundMovie);
      } else {
        toast({
          title: "Movie not found",
          description: "Sorry, we couldn't find the movie you're looking for.",
          variant: "destructive"
        });
        navigate("/movies");
      }
      setLoading(false);
    }, 500);
  }, [id, navigate, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container flex items-center justify-center">
          <div className="animate-pulse text-2xl">Loading movie details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!movie) {
    return null; // This shouldn't happen due to navigation in useEffect
  }

  // Additional movie details that would come from a real API
  const details = {
    description: "This is a placeholder description for the movie. In a real application, this would contain a detailed synopsis of the movie's plot.",
    director: "Director Name",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    duration: "120 minutes"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section with movie backdrop */}
        <div className="relative h-[50vh] bg-gradient-to-b from-black/60 to-background">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          
          <div className="container relative h-full flex flex-col justify-end pb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="absolute top-6 left-6 bg-black/30 hover:bg-black/50 text-white border-white/20 w-fit mb-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back
            </Button>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="rounded-md w-full max-w-[200px] h-auto shadow-xl hidden md:block"
              />
              <div>
                <Badge className="mb-2 bg-digitalflix-blue/80">
                  {movie.genre}
                </Badge>
                <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
                <div className="flex items-center gap-4 text-gray-300 mb-4">
                  <span>{movie.year}</span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
                    <span>{movie.rating}/10</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{details.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Movie details section */}
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Synopsis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{details.description}</p>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Cast & Crew</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Director</h3>
                    <p>{details.director}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cast</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {details.cast.map((actor, index) => (
                        <li key={index}>{actor}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Movie Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground">Release Year</h3>
                      <p>{movie.year}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground">Genre</h3>
                      <p>{movie.genre}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground">Duration</h3>
                      <p>{details.duration}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground">Rating</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{movie.rating}/10</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <Button 
                  className="w-full bg-digitalflix-purple hover:bg-digitalflix-purple/90"
                >
                  Add to Favorites
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MovieDetails;
