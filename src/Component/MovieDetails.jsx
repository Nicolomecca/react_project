import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({});
  const [comment, setCommment] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

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
        if (data.imdbID === params.movieId) {
          setMovieDetails(data);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        } else {
          navigate("/not-found");
        }
      })
      .catch((err) => {
        console.error("Errore durante il recupero dei dati:", err.message);
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={12} className="d-flex justify-content-center">
          <Card
            className="movie-card rounded-0"
            style={{
             
              position: "relative",
              overflow: "hidden",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="movie-card-image "
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>
          <h3 className="movie-title text-white ms-2 mt-3">{movieDetails.Title}</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
