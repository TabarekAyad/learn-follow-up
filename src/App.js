import BlogPost from "./components/blogs/BlogPost";
import movieCard from "./components/movies/movieCard";
import Hogwarts from "./components/HarryPotter/Hogwarts";


function App() {
  const title = "Mad Max";
  const posterURL = "http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  return (
    <div className="App">
        <BlogPost />
        
        <movieCard title = {title} posterSrc = {posterURL} genres = {genresArr} />
        
        <Hogwarts />


    </div>
  );
}

export default App;
