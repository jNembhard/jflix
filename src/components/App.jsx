import React from "react";
import Banner from "./Banner";
// import Nav from "./Nav";
import Row from "./Row";
import requests from "../requests";

function App() {
  return (
    <div className="root">
      {/* <Nav /> */}
      <Banner />
      <h1>Hey Jason!</h1>
      <Row
        title="NETFLIX ORIGINALS"
        getUrl={requests.getNetfilxOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" getUrl={requests.getTrending} />
      <Row title="Top Rated Movies" getUrl={requests.getTopRated} />
      <Row title="Action Movies" getUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" getUrl={requests.getComedyMovies} />
      <Row title="Horror Movies" getUrl={requests.getHorrorMovies} />
      <Row title="Romance Movies" getUrl={requests.getRomanceMovies} />
      <Row title="Documentaries" getUrl={requests.getDocumentaries} />
    </div>
  );
}

export default App;
