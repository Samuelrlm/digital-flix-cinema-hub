
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MovieProps {
  id: number;
  title: string;
  poster: string;
  year: number;
  rating: number;
  genre: string;
}

const MovieCard = ({ id, title, poster, year, rating, genre }: MovieProps) => {
  return (
    <div className="movie-card group">
      <img 
        src={poster} 
        alt={title} 
        className="w-full h-[320px] object-cover"
      />
      <div className="gradient-overlay"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Badge className="mb-2 bg-digitalflix-blue/80 hover:bg-digitalflix-blue">
          {genre}
        </Badge>
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">{year}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
