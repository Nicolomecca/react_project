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
    fetch(`http://www.omdbapi.com/?apikey=bad02e72&t=${this.props.title}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((movie) => {
        this.setState({
          movies: [movie],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <Container className="movie-gallery">
        <h2>{this.props.title} Series</h2>
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
export default MovieGallery