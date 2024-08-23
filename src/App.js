import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Component/MyNavbar';
import MyFooter from './Component/MyFooter';
import MyTvShowSection from './Component/MyTvShowSection';
import MovieGallery from './Component/MovieGallery';
import MyFilmList from './Component/MyFilmList';


function App() {
  return (
    <div>
      <MyNavbar />
      <MyTvShowSection />
      <MovieGallery title='Harry Potter' /> 
      <MovieGallery title='Harry Potter' /> 
      <MovieGallery title='Harry Potter' /> 

       {/* Assicurati che questo componente mostri i film correttamente */}
      <MyFooter />
    </div>
  );
}

export default App;
