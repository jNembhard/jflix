import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

const baseImageUrl = "http://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await axios.get(requests.getNetfilxOriginals);

      const array =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(array);

      return request;
    }
    getData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseImageUrl}${movie?.backdrop_path}"`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        {/*title*/}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        {/*div > 2 buttons */}
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
