import React, { useState, useEffect } from "react";
import InputMidAndCenter from "./InputMidAndCenter";
import { getApi } from "../services/apiService";
import ListOfMovie from "./ListOfMovie";

function MovieApp(props) {
  let [movieArr, setmovieArr] = useState([]);
  let [loading, setLoading] = useState(false);
  let [url, setUrl] = useState(null);
  useEffect(() => {
    getApi(url).then((data) => {
      setmovieArr(data.Search);
      console.log(movieArr);
    });
  }, [url]);

  const searchMovie = (_inputSearch) => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setUrl(
        `http://www.omdbapi.com/?3896198&apikey=e04a6b04&s=${_inputSearch}`
      );
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="container-fluid ">
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "600px" }}
        >
          <InputMidAndCenter searchMovie={searchMovie} />
          <ListOfMovie movieArr={movieArr} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default MovieApp;
