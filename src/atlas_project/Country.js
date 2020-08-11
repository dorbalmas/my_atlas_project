import React, { useState, useEffect } from "react";
import { doApiGet } from "../services/apiService";
import SingleCountry from "./SingleCountry";
function Country(props) {
  let [countryArr, setcountryArr] = useState([]);
  let temp = [];
  let checkStatus;
  useEffect(() => {
    let url = "";
    if (props.match) {
      if (props.match.params.name) {
        url = `https://restcountries.eu/rest/v2/name/${props.match.params.name}?fullText=true
		`;
      }
      if (props.match.params.code) {
        console.log(props.match.params.code);
        url =
          "https://restcountries.eu/rest/v2/alpha/" + props.match.params.code;
      }
    }
    doApiGet(url).then((data) => {
      if (!Array.isArray(data)) {
        temp.push(data);
        setcountryArr(temp);
      } else if (data.status === 404) {
        setcountryArr(data.status);
      } else {
        setcountryArr(data);
      }
    });
  }, [props.match]);

  if (countryArr[0]) {
    checkStatus = countryArr[0].status;
  }

  return checkStatus != 404 ? (
    <div className="row">
      {countryArr.map((item) => {
        return <SingleCountry key={item.name} item={item} />;
      })}
    </div>
  ) : (
    <div className="text-success  text-center">
      <b> Please enter a correct country name!</b>
    </div>
  );
}

export default Country;
