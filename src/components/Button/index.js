
import "./styles.css";
import React from "react";


export default function Button({ handleClick,buttonImage}) {
  return (
    <div id="button1">
      <button onClick={handleClick}><img src={buttonImage} alt="title"/></button>
    </div>
  );
}