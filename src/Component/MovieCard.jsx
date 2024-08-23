

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        src={movie.Poster} 
        alt={movie.Title} 
        className="movie-card-image" 
      />
      
        <h3 className="movie-title">{movie.Title}</h3>
        <div className="movie-actions ">
          <button className="btn btn-play text-white">
            <i className="bi bi-play-circle text-white"></i> Play
          </button>
          <button className="btn btn-add text-white">
            <i className="bi bi-plus-circle text-white"></i> My List
          </button>
        </div>
      </div>
    
  );
};

export default MovieCard;