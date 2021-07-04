import React, { useState, useEffect } from "react";
import axios from "../axios";

const baseImageUrl = "http://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function getData() {
      const request = await axios.get(props.getUrl);
      // combines baseUrl with API portions
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [props.getUrl]); // array dependent in async function

  // console.log(movies);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
            src={`${baseImageUrl}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            onError={(event) => (event.target.style.display = "none")}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
