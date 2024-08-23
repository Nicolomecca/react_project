import React, { Component } from "react";
import { Card } from "react-bootstrap";

class MovieCard extends Component {
  state = {
    selected: false,
  };

  handleMouseEnter = () => {
    this.setState({ selected: true });
  };

  handleMouseLeave = () => {
    this.setState({ selected: false });
  };

  render() {
    const { movie } = this.props;

    return (
      <Card
      className="movie-card rounded-0"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      style={{ width: '240px', height: '160px', position: 'relative', overflow: 'hidden', border: 'none' }}
    >
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          className="movie-card-image"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        />
      </div>
      {this.state.selected && (
        <Card.ImgOverlay className="d-flex align-items-center">
          <h3 className="movie-title text-white">{movie.Title}</h3>
        </Card.ImgOverlay>
      )}
    </Card>
    );
  }
}
export default MovieCard;
