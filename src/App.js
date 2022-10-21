import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import PosterRow from "./Components/PosterRow/PosterRow";
import { API_Key } from "./Constants/Constants";

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Banner/>
      <PosterRow  title="Trendings" imgSize="poster" titleClass="postersTitle" imgAddress={`/trending/all/day?api_key=${API_Key}`}/>
      <PosterRow title="Actions" imgSize="smallPoster" titleClass="smallPostersTitle" imgAddress={`/discover/movie?api_key=${API_Key}&with_genres=28`}/>
      <PosterRow title="ComedyMovies" imgSize="smallPoster" titleClass="smallPostersTitle" imgAddress={`/discover/movie?api_key=${API_Key}&with_genres=35`}/>
      <PosterRow title="HorrorMovies" imgSize="smallPoster" titleClass="smallPostersTitle" imgAddress={`/discover/movie?api_key=${API_Key}&with_genres=27'`}/>
      
    </div>
  );
}

export default App;
