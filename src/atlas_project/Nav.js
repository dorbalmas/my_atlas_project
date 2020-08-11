import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

function Nav(props) {
  let myInput = useRef(null);
  let history = useHistory();

  const search = () => {
    history.push("/name/" + myInput.current.value);
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      history.push("/name/" + myInput.current.value);
    }
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mt-2 ">
          <nav className="d-flex justify-content-around  col-lg-9 float-left border  bg-dark form-control">
            {/* <Link to="/">Home</Link> */}
            <Link to="/name/usa">USA</Link>
            <Link to="/name/israel">ISRAEL</Link>
            <Link to="/name/gb">UK</Link>
            <Link to="/name/france">FRANCE</Link>
            <Link to="/name/thailand">THAILAND</Link>
          </nav>

          <div className="input-group  col-lg-3 float-right">
            <input
              onKeyPress={keyPressed}
              ref={myInput}
              className="form-control  border-right-0 border"
              type="search"
              placeholder="search..."
            />
            <span className="input-group-append">
              <button
                onClick={search}
                className="btn btn-outline-secondary border-left-0 border"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
