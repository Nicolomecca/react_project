import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({});
  const [comment, setComment] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
    fetchComments();
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
          setIsLoading(false);
        } else {
          navigate("/not-found");
        }
      })
      .catch((err) => {
        console.error("Errore durante il recupero dei dati:", err.message);
        setIsLoading(false);
      });
  };

  const fetchComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`, // Corretto qui
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNmODNmMDAwOGQxMDAwMTVkZDNiZGEiLCJpYXQiOjE3MjQ4NzU3NjAsImV4cCI6MTcyNjA4NTM2MH0.RxUKrml77TvOJMDa4qIZWMJZ2uBZSSaHOV-xOH9RlBA",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((commentArray) => {
        console.log(commentArray);
        setComment(commentArray);
      })
      .catch((err) => {
        console.error("Errore durante il recupero dei dati:", err.message);
      });
  };

  return (
    <Container>
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="light" />
          <p className="text-white mt-2">Caricamento in corso...</p>
        </div>
      )}
      {!isLoading && (
        <Row className="justify-content-center">
          <Col md={12} className="d-flex justify-content-center mt-3">
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
            <div className="d-flex flex-column ms-4">
              <h3 className="movie-title text-white mt-3">
                Title: {movieDetails.Title}
              </h3>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {comment.map((c) => (
                  <li className="my-3 text-white" key={c._id}>
                    {c.comment}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetails;
