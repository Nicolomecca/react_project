import React, { Component } from "react";

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
      <div
        className="movie-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-card-image"
        />
        {this.state.selected && (
          <h3 className="movie-title text-white">{movie.Title}</h3>
        )}
      </div>
    );
  }
}

export default MovieCard;