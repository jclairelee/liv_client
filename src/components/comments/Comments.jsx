import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comments.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import AddComment from "../addComment/AddComment";

function Comments({ postId, post }) {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    try {
      await axios
        .get(`http://localhost:8080/comments/${postId}`, {
          withCredentials: true,
        })
        .then((res) => {
          setComments(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [comments.length]);

  const deleteHandler = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8080/comments/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          fetchData();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const timeFormat = (time) => {
    const date = new Date(time);
    console.log(date.toLocaleDateString());
    const d = date.toLocaleDateString();
    const t = date.toLocaleTimeString();
    return d + ` ` + t;
  };

  return (
    <>
      <div className="comment">
        <AddComment comments={comments} fetchData={fetchData} />
        {comments &&
          [...comments].reverse().map((comment, index) => {
            return (
              <div className="commentContainer" key={index}>
                <div className="comment__user">
                  <img
                    className="comment__user__img"
                    src={`../upload/${comment.image}`}
                    alt="user"
                  />
                  <span className="comment__user__name">
                    {comment.username}
                  </span>
                  <span className="comment__user__date">
                    {timeFormat(comment.createdAt)}
                  </span>
                  <button
                    className="comment__btn comment__btn"
                    onClick={() => deleteHandler(comment.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>

                <div className="comment__text">
                  <p className="comment__text__msg">{comment.text}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Comments;
