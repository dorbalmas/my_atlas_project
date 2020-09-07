import React from "react";
import ItemComp from "./ItemComp";
import * as ReactbootStrap from "react-bootstrap";
function ListOfMovie(props) {
  return (
    <div className="container-fluid mt-5 ">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {props.movieArr ? (
            !props.loading ? (
              props.movieArr.map((item, index) => {
                return (
                  <ItemComp
                    item={item}
                    index={index}
                    movieArr={props.movieArr}
                    key={item.imdbID}
                  />
                );
              })
            ) : (
              <ReactbootStrap.Spinner animation="border" />
            )
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListOfMovie;
