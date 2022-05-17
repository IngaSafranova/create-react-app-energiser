/* eslint-disable react-hooks/exhaustive-deps */
import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import motivationImage from "./Motivation.png";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/";

function Quotes({ id }) {
  const [quote, setQuote] = useState("");

  async function fetchQuote() {
    const response = await fetch(`${API_URL}quotes/${id}`);
    const data = await response.json();
    // console.log(data.payload[0]);
    setQuote({
      quote: data.payload[0].quotation,
    });
    // console.log(quote.quote);
  }

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote, id]);

  
  return (
    <div id="quotes1">
      <img src={motivationImage} alt="title" />
      <div class="quotescontainer">
      <p id="quotesText">
      {quote.quote}
      </p>
      </div>
    </div>
  );
  
}

export default Quotes;