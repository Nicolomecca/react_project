import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Component/MyNavbar";
import MyFooter from "./Component/MyFooter";
import MyTvShowSection from "./Component/MyTvShowSection";
import MovieGallery from "./Component/MovieGallery";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyTvShowSection />
      <MovieGallery title="Harry Potter" />
      <MovieGallery title="Star Trek" />
      <MovieGallery title="The Lord of the Rings" />
      {/* Assicurati che questo componente mostri i film correttamente */}
      <MyFooter />
    </div>
  );
}

export default App;
