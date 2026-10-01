
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-digitalflix-dark to-transparent z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
        alt="Hero Image"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 z-20 container flex flex-col justify-center">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Welcome to <span className="text-digitalflix-purple">FLY Flix</span></h1>
          <p className="text-lg text-gray-200 mb-8">
            Discover the best movies all in one place. Stream now, enjoy unlimited entertainment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-digitalflix-purple hover:bg-digitalflix-purple/90">
              <Link to="/movies">Browse Movies</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-digitalflix-blue text-digitalflix-blue hover:text-digitalflix-blue/90 hover:bg-background/50">
              <Link to="/add-movie">Add Movie</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
