import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

function Main({ posts, cat }) {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  const trimText = (txt) => {
    txt = txt.slice(0, 300);
    return `${txt}...`;
  };
  const processTitle = (title) => {
    title = title.slice(10).replace(/=/g, " ");
    return title.toUpperCase();
  };
  return (
    <div className="main">
      <div className="main-container">
        {cat ? (
          <p
            style={{ fontSize: "1.25rem", margin: "0 0 2rem 0" }}
            className="main__category"
          >
            {processTitle(cat)}
          </p>
        ) : (
          <h3 className="main__title">Latest Posts</h3>
        )}
        <div className="main__content">
          {posts.slice(posts.length - 8).map((item) => (
            <Link
              className="main__content__list__link"
              to={`/posts/${item.id}`}
              key={item.id}
            >
              <div className="main__content__list">
                <div className="main__content__list__img">
                  <img src={`../upload/${item.imgURL}`} alt="bread" />
                </div>
                <div className="main__content__list__text">
                  <h2 className="main__content__list__text-title">
                    {item.title}
                  </h2>

                  <span className="main__content__list__text-content">
                    {trimText(getText(item.content))}
                  </span>

                  <button className="btns">Read More</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
