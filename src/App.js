import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Component/MyNavbar";
import MyFooter from "./Component/MyFooter";
import MyTvShowSection from "./Component/MyTvShowSection";
import MovieGallery from "./Component/MovieGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Component/NotFound";
import MovieDetails from "./Component/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <MyNavbar />
        </header>
        <main>
          <Routes>
            <Route path="/tv-shows" element={<MyTvShowSection />} />
            <Route
              path="/"
              element={
                <>
                  <MovieGallery title="Harry Potter" />
                  <MovieGallery title="Star Trek" />
                  <MovieGallery title="The Lord of the Rings" />
                </>
              }
            />
            <Route path ="/details/:movieId" element={<MovieDetails/>}/>
              <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
