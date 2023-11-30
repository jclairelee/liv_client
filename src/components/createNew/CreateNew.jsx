import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreateNew.scss";
import moment from "moment";

function CreateNew() {
  const state = useLocation().state;
  const urlInfo = useLocation();
  const [content, setContent] = useState(state?.content || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.category || "");
  const navigate = useNavigate();
  const searchPostId = urlInfo.search;
  const postIdFromUrl = searchPostId.split("=");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("http://localhost:8080/upload/", formData, {
        withCredentials: true,
        AccessControlAllowOrigin: "*",
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    const img = await upload();

    try {
      state
        ? await axios.put(
            `http://localhost:8080/posts/${postIdFromUrl[1]}`,
            {
              title,
              content: content,
              category,
              imgURL: file ? img : "",
            },
            {
              withCredentials: true,
              AccessControlAllowOrigin: "*",
            }
          )
        : await axios.post(
            `http://localhost:8080/posts/`,
            {
              title,
              content: content,
              category,
              imgURL: file ? img : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            {
              withCredentials: true,
              AccessControlAllowOrigin: "*",
            }
          );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const saveDraftHandler = () => {
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("content", content);
    navigate("/");
  };

  return (
    <div className="createNew">
      <div className="createNew__content">
        {/* Title */}
        <div className="createNew__content__box">
          <label htmlFor="title" className="createNew__content__label">
            Title
          </label>
          <input
            type="text"
            placeholder="title"
            id="title"
            className="createNew__content__input createNew__content__input-title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="createNew__content__box">
          <label htmlFor="description" className="createNew__content__label">
            Description
          </label>
          <ReactQuill
            id="description"
            theme="snow"
            value={content}
            onChange={setContent}
            style={{
              height: "25rem",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      <div className="createNew__sideMenu">
        <div className="createNew__btns__container">
          <button
            onClick={saveDraftHandler}
            className="createNew__btns createNew__btns--save"
          >
            Save draft
          </button>
          <button
            onClick={clickHandler}
            className="createNew__btns createNew__btns--publish"
          >
            Publish
          </button>
        </div>
        <h2 className="createNew__sideMenu__title">Category</h2>
        <div className="createNew__category">
          {/* Category: Home Decor */}
          <div className="createNew__category__item">
            <input
              type="radio"
              id="home"
              name="category"
              className="createNew__category__item__file"
              onChange={(e) => setCategory(e.target.id)}
            />
            <label htmlFor="homeDecor">Home Décor</label>
          </div>
          {/* Category: Food */}
          <div className="createNew__category__item">
            <input
              type="radio"
              id="food"
              name="category"
              className="createNew__category__item__file"
              onChange={(e) => setCategory(e.target.id)}
            />
            <label htmlFor="food">Food</label>
          </div>
          {/* Category: Beverage */}
          <div className="createNew__category__item">
            <input
              type="radio"
              id="beverage"
              name="category"
              className="createNew__category__item__file"
              onChange={(e) => setCategory(e.target.id)}
            />
            <label htmlFor="beverage">Beverage</label>
          </div>
          {/* Category: Holidays */}
          <div className="createNew__category__item">
            <input
              type="radio"
              id="holidays"
              name="category"
              className="createNew__category__item__file"
            />
            <label htmlFor="holidays">Holidays</label>
          </div>
          {/* Category: DIY/crafting */}
          <div className="createNew__category__item">
            <input
              type="radio"
              id="DIY"
              name="category"
              className="createNew__category__item__file"
              onChange={(e) => setCategory(e.target.id)}
            />
            <label htmlFor="DIY">DIY/Crafting</label>
          </div>
          {/* Category: Gardening */}
          <div className="createNew__category__item">
            <input
              type="radio"
              id="gardening"
              name="category"
              className="createNew__category__item__file"
              onChange={(e) => setCategory(e.target.id)}
            />
            <label htmlFor="gardening">Gardening</label>
          </div>
          {/* Category: Cleaning */}
          <div className="createNew__category__item">
            <input
              type="radio"
              id="cleaning"
              name="category"
              className="createNew__category__item__file"
              onChange={(e) => setCategory(e.target.id)}
            />
            <label htmlFor="cleaning">Cleaning</label>
          </div>
        </div>
        {/* Upload */}
        <div className="createNew__upload">
          <input
            type="file"
            id="file"
            className="createNew__upload__input"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
