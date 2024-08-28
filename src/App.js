import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Component/MyNavbar";
import MyFooter from "./Component/MyFooter";
import MyTvShowSection from "./Component/MyTvShowSection";
import MovieGallery from "./Component/MovieGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Component/NotFound";
import MovieDetails from "./Component/MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <header>
          <MyNavbar />
        </header>
        <main className="flex-grow-1">
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
            <Route path="/details/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
