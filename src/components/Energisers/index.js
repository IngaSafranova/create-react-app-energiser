/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import "./styles.css";
import React from "react";
import energiserImage from "./Energiser.png";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/";

function Energisers({ id }) {
  const [energiser, setEnergiser] = useState("");

  async function fetchEnergiser() {
    const response = await fetch(`${API_URL}energisers/${id}`);
    const data = await response.json();
    // console.log(data.payload[0]);
    setEnergiser({
      energiser: data.payload[0].activity,
      category: data.payload[0].category,
      url: data.payload[0].url,
    });
    // console.log(energiser.energiser);
  }

  useEffect(() => {
    fetchEnergiser();
  }, [fetchEnergiser, id]);


  return (
    <div id="energiser1">
      <img src={energiserImage} alt="title" />
      <div class="flexcontainer">
        <p id="energiserText">
          Your energiser for today is {energiser.energiser}
        </p>
        <a
          class="energiserimage"
          href={energiser.url}
          target="_blank"
          rel="noreferrer"
        >
          Take me there!
        </a>
      </div>
    </div>
  );
  // // return (
  // //   <div>
  //     {/* <p>Your energiser for today is {energiser.energiser}</p>
  //     <a href={energiser.url} target="_blank" rel="noreferrer">
  //       Take me there!
  //     </a>
  //   </div>
  // ); */}
}

export default Energisers;