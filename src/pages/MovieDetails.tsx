
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowLeft, Pencil, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useMovies } from "@/context/MovieContext";

const genres = [
  "Action", "Adventure", "Animation", "Comedy", "Crime",
  "Documentary", "Drama", "Fantasy", "Horror", "Mystery",
  "Romance", "Sci-Fi", "Thriller", "Western"
];

interface EditForm {
  title: string;
  year: string;
  genre: string;
  director: string;
  minutes: string;
  rating: string;
  poster: string;
  description: string;
}

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { movies, updateMovie, deleteMovie } = useMovies();

  const movie = movies.find(m => m.id === Number(id));

  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editForm, setEditForm] = useState<EditForm | null>(null);

  useEffect(() => {
    // Simulate loading delay for a smoother transition
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && !movie) {
      toast({
        title: "Movie not found",
        description: "Sorry, we couldn't find the movie you're looking for.",
        variant: "destructive"
      });
      navigate("/movies");
    }
  }, [loading, movie, navigate, toast]);

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
    return null; // Handled by navigation in useEffect
  }

  const openEditModal = () => {
    setEditForm({
      title: movie.title,
      year: String(movie.year),
      genre: movie.genre,
      director: movie.director ?? "",
      minutes: movie.minutes ? String(movie.minutes) : "",
      rating: String(movie.rating),
      poster: movie.poster,
      description: movie.description ?? ""
    });
    setEditOpen(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleEditSelect = (value: string) => {
    setEditForm(prev => (prev ? { ...prev, genre: value } : prev));
  };

  const handleEditSave = () => {
    if (!editForm) return;
    updateMovie(movie.id, {
      title: editForm.title,
      year: Number(editForm.year) || movie.year,
      genre: editForm.genre,
      director: editForm.director,
      minutes: Number(editForm.minutes) || movie.minutes,
      rating: Number(editForm.rating) || movie.rating,
      poster: editForm.poster,
      description: editForm.description
    });
    setEditOpen(false);
    toast({
      title: "Movie Updated",
      description: `${editForm.title} has been successfully updated.`
    });
  };

  const handleDelete = () => {
    deleteMovie(movie.id);
    setDeleteOpen(false);
    toast({
      title: "Movie Deleted",
      description: `${movie.title} has been removed from the collection.`
    });
    navigate("/movies");
  };

  const duration = movie.minutes ? `${movie.minutes} minutes` : "120 minutes";

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
                    <span>{duration}</span>
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
                  <p>{movie.description || "No synopsis available for this movie yet."}</p>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Cast & Crew</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <h3 className="font-semibold mb-2">Director</h3>
                    <p>{movie.director || "Unknown"}</p>
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
                      <p>{duration}</p>
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

              <div className="mt-6 space-y-3">
                <Button
                  className="w-full bg-digitalflix-purple hover:bg-digitalflix-purple/90"
                  onClick={openEditModal}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit Movie
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => setDeleteOpen(true)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Movie
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Movie Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Movie</DialogTitle>
            <DialogDescription>
              Update the information for "{movie.title}".
            </DialogDescription>
          </DialogHeader>

          {editForm && (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSave();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="edit-title">Movie Title</Label>
                <Input
                  id="edit-title"
                  name="title"
                  value={editForm.title}
                  onChange={handleEditChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-year">Release Year</Label>
                  <Input
                    id="edit-year"
                    name="year"
                    type="number"
                    min="1900"
                    max={new Date().getFullYear() + 5}
                    value={editForm.year}
                    onChange={handleEditChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-genre">Genre</Label>
                  <Select value={editForm.genre} onValueChange={handleEditSelect}>
                    <SelectTrigger id="edit-genre">
                      <SelectValue placeholder="Select genre" />
                    </SelectTrigger>
                    <SelectContent>
                      {genres.map((genre) => (
                        <SelectItem key={genre} value={genre}>
                          {genre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-director">Director</Label>
                  <Input
                    id="edit-director"
                    name="director"
                    value={editForm.director}
                    onChange={handleEditChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-minutes">Duration (minutes)</Label>
                  <Input
                    id="edit-minutes"
                    name="minutes"
                    type="number"
                    min="1"
                    max="999"
                    value={editForm.minutes}
                    onChange={handleEditChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-rating">Rating (0-10)</Label>
                  <Input
                    id="edit-rating"
                    name="rating"
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={editForm.rating}
                    onChange={handleEditChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-poster">Poster URL</Label>
                  <Input
                    id="edit-poster"
                    name="poster"
                    value={editForm.poster}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  rows={4}
                  value={editForm.description}
                  onChange={handleEditChange}
                />
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setEditOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-digitalflix-purple hover:bg-digitalflix-purple/90">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete "{movie.title}"?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The movie will be permanently removed from the collection.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white hover:bg-destructive/90"
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default MovieDetails;
