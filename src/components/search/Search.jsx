import React, { useState } from "react";
import search from "../../assets/icons/search.svg";
function Search({ posts }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [result, setResult] = useState("");

  console.log(searchKeyword);

  const clickHandler = (e) => {
    e.preventDefault();
    posts
      .filter((word) => {
        if (searchKeyword === "") {
          return word;
        } else if (
          word.title.toLowerCase().includes(searchKeyword.toLowerCase())
        ) {
          return word;
        }
      })
      .map((post) => {
        return setResult(post.title);
      });
  };

  return (
    <div className="main__search">
      <input
        type="text"
        name="text"
        placeholder="Search..."
        className="main__search__input"
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
      />
      <img
        onClick={clickHandler}
        className="main__search__icon"
        src={search}
        alt=""
      />

      <p>{result}</p>
    </div>
  );
}

export default Search;
