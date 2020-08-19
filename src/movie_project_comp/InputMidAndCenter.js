import React, { useRef, useState } from "react";

function InputMidAndCenter(props) {
  let myInput = useRef(null);
  let [position, setposition] = useState(
    "form-control  border rounded-pill w-50"
  );
  let [hideHeader, sethideHeader] = useState("text-center display-1");

  const search2 = () => {
    props.searchMovie(myInput.current.value);
    if (myInput.current.value) {
      setposition("form-control  border rounded-pill w-100 fixed-top");
      sethideHeader("d-none");
    } else window.location.reload();
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center justify-content-center ">
          <header className={hideHeader}>MY MOVIE</header>
          <input
            onKeyUp={search2}
            type="search"
            ref={myInput}
            placeholder="search movie by title..."
            className={position}
          />
        </div>
      </div>
    </div>
  );
}

export default InputMidAndCenter;
