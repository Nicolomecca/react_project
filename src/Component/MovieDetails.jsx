import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const MovieDetails = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = () => {
      fetch(`http://www.omdbapi.com/?apikey=bad02e72&i=${params.movieId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Errore nel recupero dei film");
          }
        })
        .then((data) => {
          if (data.imdbId === params.movieId) {
            setMovieDetails(data);
            setTimeout(() => {
              setIsLoading(false);
            }, 500);
          } else {
            navigate('/not-found');
          }
        })
        .catch((err) => {
            console.error("Errore durante il recupero dei dati:", err.message);
            setIsLoading(false);
          });
    };

    fetchMovies();
  }, [params.movieId, navigate]);

  return (
    <div className="text-center">
      <Card
        className="movie-card rounded-0"
        style={{ width: '240px', height: '160px', position: 'relative', overflow: 'hidden', border: 'none' }}
      >
        <Card.Img
          variant="top"
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="movie-card-image"
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </Card>
      <h3 className="movie-title text-white mt-3">{movieDetails.Title}</h3>
    </div>
  );
};

export default MovieDetails;