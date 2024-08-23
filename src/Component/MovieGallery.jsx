import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { Component } from "react";

class MovieGallery extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=bad02e72&t=Star%20Wars`)
      .then((response) => {
        if (response.ok) {
          console.log("tutto benone");
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((movie) => {
        console.log(movie);
        this.setState({
          movies: [movie], // Imposta movies come un array con un singolo film
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <Container className="movie-gallery">
        <Row>
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default MovieGallery;
