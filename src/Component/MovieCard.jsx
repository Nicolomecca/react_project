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
      <div className="text-center "> 
      <Card
        className="movie-card rounded-0"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{ width: '240px', height: '160px', position: 'relative', overflow: 'hidden', border: 'none' }}
      >
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          className="movie-card-image"
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
        />
      </Card>
      {this.state.selected && (
        <h3 className="movie-title text-white mt-3">{movie.Title}</h3> 
      )}
    </div>
  );
}
}
export default MovieCard;
