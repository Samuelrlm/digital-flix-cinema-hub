export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  rating: number;
  genre: string;
  minutes?: number;
  director?: string;
  description?: string;
}

export const seedMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWV8ZW58MHx8MHx8fDA%3D",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    minutes: 148,
    director: "Christopher Nolan",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fHww",
    year: 2014,
    rating: 8.6,
    genre: "Adventure",
    minutes: 169,
    director: "Christopher Nolan",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllfGVufDB8fDB8fHww",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    minutes: 152,
    director: "Christopher Nolan",
    description: "Batman raises the stakes in his war on crime, but when a criminal mastermind known as the Joker appears, Gotham is thrown into anarchy."
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster: "https://images.unsplash.com/photo-1512113569142-8a60fccc7caa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllfGVufDB8fDB8fHww",
    year: 1994,
    rating: 8.9,
    genre: "Crime",
    minutes: 154,
    director: "Quentin Tarantino",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllfGVufDB8fDB8fHww",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
    minutes: 142,
    director: "Frank Darabont",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 6,
    title: "The Godfather",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdmllfGVufDB8fDB8fHww",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
    minutes: 175,
    director: "Francis Ford Coppola",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fHww",
    year: 2003,
    rating: 8.9,
    genre: "Adventure",
    minutes: 201,
    director: "Peter Jackson",
    description: "A hobbit and his companions embark on a quest to destroy a powerful ring and defeat the dark lord seeking to conquer Middle-earth."
  },
  {
    id: 8,
    title: "Forrest Gump",
    poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vdmllfGVufDB8fDB8fHww",
    year: 1994,
    rating: 8.8,
    genre: "Drama",
    minutes: 142,
    director: "Robert Zemeckis",
    description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75."
  }
];
