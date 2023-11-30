import React from "react";
import "./Subsc.scss";

function Subsc() {
  return (
    <div className="subsc">
      <div className="subsc-content">
        <h2 className="subsc-content__header">Join the Fun!</h2>
        <span className="subsc-content__text">
          Stay informed about our most recent recipes, videos, and updates by
          subscribing to our newsletter.
        </span>
        <button className="subsc-content__btn">subscribe</button>
      </div>
    </div>
  );
}

export default Subsc;
