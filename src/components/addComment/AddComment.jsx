import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import axios from "axios";
import "./AddComment.scss";
import TextField from "@mui/material/TextField";

function AddComment({ comments, fetchData }) {
  const [comment, setComment] = useState("");

  const location = useLocation();

  const postId = location.pathname.split("/")[2];
  console.log(fetchData);
  useEffect(() => {
    fetchData();
  }, [comments.length]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `http://localhost:8080/comments/`,
          {
            text: comment,
            postID: postId,
            createdAt: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },
          {
            withCredentials: true,
            AccessControlAllowOrigin: "*",
          }
        )
        .then((res) => {
          console.log(res);
          fetchData();
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addComment">
      <div className="addComment__box">
        <div className="addComment__title">
          <h4 className="addComment__title__quantity">
            {comments.length} Comments
          </h4>
        </div>

        <div className="addComment__input">
          <form className="addComment__formField" onSubmit={submitHandler}>
            <div className="addComment__inputField">
              {/* <input
                type="text"
                placeholder="Add a new comment"
                className="addComment__textarea"
                id="textarea"
                onChange={(e) => {
                  setComment(e.currentTarget.value);
                }}
              ></input> */}
              <TextField
                id="textarea"
                label="Add a new comment"
                className="addComment__textarea"
                variant="filled"
                onChange={(e) => {
                  setComment(e.currentTarget.value);
                }}
                sx={{ width: "45rem" }}
              />
            </div>

            <div className="addComment__btn">
              <button className="addComment__btn--add" onClick={submitHandler}>
                <AddIcon />
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
