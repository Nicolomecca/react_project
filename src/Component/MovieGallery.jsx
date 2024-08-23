import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { Component } from "react";

class MovieGallery extends Component {
  state = {
    movies: [],
    loading: true, 
    error: null, 
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=bad02e72&s=${this.props.title}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((data) => {
        if (data.Response === "True") {
          const movies = data.Search.slice(0, 6);
          this.setState({ movies, loading: false }); 
        } else {
          this.setState({ error: "Nessun film trovato", loading: false }); 
        }
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false }); 
      });
  };

  render() {
    const { loading, error, movies } = this.state;

    return (
      <Container fluid className="movie-gallery">
        <h4 className='text-white mb-3 mt-3 f-6'>{this.props.title} Series</h4>
        
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
            <p className="text-white mt-2">Caricamento in corso...</p>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <Row className="row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6 mb-4 ms-1 me-1">
            {movies.map((movie) => (
              <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-2 text-center px-1">
                <div className="d-flex justify-content-center">
                  <MovieCard movie={movie} />
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  }
}

export default MovieGallery;