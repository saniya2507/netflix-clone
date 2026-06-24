import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MovieRow from "../../components/MovieRow/MovieRow";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Banner />

      <MovieRow
        title="Trending Now"
        endpoint="/movies/trending"
      />

      <MovieRow
        title="Popular Movies"
        endpoint="/movies/popular"
      />

      <MovieRow
        title="Top Rated"
        endpoint="/movies/top-rated"
      />
    </div>
  );
}

export default Home;