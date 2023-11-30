import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NextList.scss";
function NextList({ category }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/posts/?category=${category}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="next">
      <h1 className="next__section">Other posts you may like</h1>
      {posts.splice(0, 3).map((post) => (
        <div className="next__article" key={post.id}>
          <Link className="home__content__list__link" to={`/posts/${post.id}`}>
            <img
              className="next__article__img"
              src={`../upload/${post.imgURL}`}
              alt={post?.img}
            />
          </Link>
          <h2 className="next__article__title">{post.title}</h2>
          <p>{getText(post.content)}</p>
          <Link className="home__content__list__link" to={`/posts/${post.id}`}>
            <button className="next__article__btn btns">Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NextList;
