import React, { useEffect, useState } from "react";
import { getApi } from "../services/apiService";

import Swal from "sweetalert2";
function ItemComp(props) {
  let item = props.item;
  let [arr, setArr] = useState([]);
  let [url, setUrl] = useState(null);
  useEffect(() => {
    url = `http://www.omdbapi.com/?i=${item.imdbID}&apikey=e04a6b04`;
    getApi(url).then((data) => {
      setArr(data);
    });
  }, [url]);

  const popup = () => {
    setUrl(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=e04a6b04`);
    Swal.fire({
      title: arr.Title,
      text: arr.Year,
      text: arr.Plot,
      imageUrl: arr.Poster,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      confirmButtonText: "More info",
    }).then((result) => {
      if (result.value) {
        url = `http://www.omdbapi.com/?i=${item.imdbID}&apikey=e04a6b04&plot=full`;
        getApi(url).then((data2) => {
          console.log(data2);
          Swal.fire({ text: data2.Plot });
        });
      }
    });
  };
  return (
    <a
      onClick={popup}
      className="col-lg-6 border rounded mediaQ"
      style={{ minHeight: "200px" }}
    >
      <img
        src={item.Poster}
        className="float-left"
        style={{ minHeight: "200px", width: "150px" }}
      />
      <div className="col-lg-6 mediaQ float-right">
        <h1 className=" p-2">
          <b>{item.Title}</b>
        </h1>
        <p className="p-2">{item.Year}</p>
      </div>
    </a>
  );
}

export default ItemComp;
