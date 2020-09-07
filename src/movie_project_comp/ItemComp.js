import React from "react";
import { getApi } from "../services/apiService";

import Swal from "sweetalert2";
function ItemComp(props) {
  let item = props.item;
  let movieArr = props.movieArr;
  let index = props.index;
  let i = 1;
  const popup = (_item) => {
    if (movieArr[index].imdbID == _item.imdbID) i = 1;
    getApi(`https://www.omdbapi.com/?i=${_item.imdbID}&apikey=e04a6b04`).then(
      (data1) => {
        Swal.fire({
          title: data1.Title + " " + data1.Year,
          text: data1.Plot,
          imageUrl: data1.Poster,
          imageWidth: 300,
          imageHeight: 300,
          imageAlt: "Custom image",
          showCloseButton: true,
          showCloseButton: true,
          confirmButtonText: "next movie",
        }).then((result) => {
          if (result.value) {
            let movie = movieArr[index + i];
            i++;
            popup(movie);
          }
        });
      }
    );
  };
  return (
    <a
      onClick={() => popup(item)}
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
