import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote, character, image }) => (
  <div>
    <figure className="QuoteCard">
      <img src={image} alt={character} />
      <figcaption>
        <blockquote>{quote}</blockquote>
        <cite>{character}</cite>
      </figcaption>
    </figure>
  </div>
);

export default QuoteCard;
