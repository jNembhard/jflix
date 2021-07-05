import React, { useState, useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseImageUrl = "http://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function getData() {
      const request = await axios.get(props.getUrl);
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [props.getUrl]); // array dependent in async function

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v={someTrailerValue}
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
            src={`${baseImageUrl}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            onError={(event) => (event.target.style.display = "none")}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
