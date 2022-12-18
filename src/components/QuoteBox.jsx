import React from "react";
import quotes from "../quotes.json";
import colors from "../colors.json";
import { useState } from "react";

const QuoteBox = () => {
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changeQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setIndex(randomQuote);
  };

  const randomQuote = Math.floor(Math.random() * quotes.length);

  const randomColor = Math.floor(Math.random() * colors.length);

  document.body.style = `background: ${colors[randomColor].hex}`;

  return (
    <div className="container">
      <div className="card" style={{ color: `${colors[randomColor].hex}` }}>
        <div className="quote-icon">
          <i class="fa-solid fa-quote-left fa-5x"></i>
        </div>
        <p className="quote">{quotes[randomQuote].quote}</p>
        <p className="author">{quotes[randomQuote].author}</p>
        <div className="btn-container">
          <button
            className="btn"
            onClick={changeQuote}
            style={{ background: `${colors[randomColor].hex}` }}
          >
            <i class="fa-solid fa-angle-right fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
