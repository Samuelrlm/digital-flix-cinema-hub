
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Film, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const genres = [
  "Action", "Adventure", "Animation", "Comedy", "Crime",
  "Documentary", "Drama", "Fantasy", "Horror", "Mystery",
  "Romance", "Sci-Fi", "Thriller", "Western"
];

const AddMoviePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: new Date().getFullYear(),
    director: "",
    genre: "",
    rating: 5.0,
    posterUrl: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Movie Added",
        description: `${formData.title} has been successfully added to the collection.`,
      });
      setIsSubmitting(false);
      navigate("/movies");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <header className="bg-card py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Add New Movie</h1>
          <p className="text-gray-400">Fill in the details to add a new movie to the collection</p>
        </div>
      </header>
      
      <main className="flex-1 container py-12">
        <div className="max-w-2xl mx-auto bg-card rounded-lg border border-border p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Movie Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter movie title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Release Year</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear() + 5}
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Select onValueChange={(value) => handleSelectChange("genre", value)} required>
                  <SelectTrigger>
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
            
            <div className="space-y-2">
              <Label htmlFor="director">Director</Label>
              <Input
                id="director"
                name="director"
                placeholder="Director's name"
                value={formData.director}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rating">Rating (0-10)</Label>
              <Input
                id="rating"
                name="rating"
                type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="Rating out of 10"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="posterUrl">Movie Poster URL</Label>
              <Input
                id="posterUrl"
                name="posterUrl"
                placeholder="Enter URL to movie poster image"
                value={formData.posterUrl}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter movie description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>
            
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => navigate("/movies")}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-digitalflix-purple hover:bg-digitalflix-purple/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add Movie"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddMoviePage;
