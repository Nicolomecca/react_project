import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setSelected(true);
  };

  const handleMouseLeave = () => {
    setSelected(false);
  };

  const { movie } = props;

  return (
    <div
      className="text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className="movie-card rounded-0"
        style={{
          width: "240px",
          height: "160px",
          position: "relative",
          overflow: "hidden",
          border: "none",
        }}
      >
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          className="movie-card-image"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </Card>
      {selected && (
        <>
          <h3 className="movie-title text-white mt-3">{movie.Title}</h3>
          <Button
            variant="danger"
            onClick={() => navigate("/details/" + movie.imdbID)}
            className="mt-3"
          >
            Vai ai dettagli
          </Button>
        </>
      )}
    </div>
  );
};

export default MovieCard;
