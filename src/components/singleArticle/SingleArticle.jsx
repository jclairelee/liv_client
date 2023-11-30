import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NextList from "../nextList/NextList";
import "./SingleArticle.scss";
import Comments from "../comments/Comments";

function SingleArticle() {
  axios.defaults.withCredentials = true;
  const [post, setPost] = useState({});
  const [postContent, setPostContent] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  function stripTags(str) {
    str = str.replace("<p>", "");
    str = str.replace("</p>", " ");
    return str;
  }
  console.log(location);
  console.log(currentUser);
  console.log(postId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`http://localhost:8080/posts/${postId}`, {
            withCredentials: true,
          })
          .then((res) => {
            setPost(res.data);
            setPostContent(stripTags(res.data.content));
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const deleteHandler = async () => {
    try {
      await axios
        .delete(`http://localhost:8080/posts/${postId}`, {
          withCredentials: true,
        })
        .then((res) => {
          navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singleArticle">
      <div className="singleArticle__content">
        <h2 className="singleArticle__content__title">{post.title} </h2>

        <img
          className="singleArticle__content__img"
          src={`../upload/${post.imgURL}`}
          alt={`a post named ${post.title}`}
        />

        {/* Author details and other options */}
        <div className="singleArticle__author">
          <div className="singleArticle__user">
            <img
              className="singleArticle__user__img"
              src={`../upload/${post.image}`}
              alt=""
            />
          </div>
          <div className="singleArticle__info">
            <span className="singleArticle__info__name">{post.username}</span>
            <span className="singleArticle__info__date">
              Posted {moment(post.date).fromNow()}
            </span>
          </div>
          {currentUser.username === post.username && (
            <div className="singleArticle__icons">
              <Link
                className="singleArticle__icons__link"
                to={`/write?edit=${postId}`}
                state={post}
              >
                <EditIcon />
              </Link>
              <DeleteIcon
                onClick={deleteHandler}
                sx={{ color: "skyBlue", cursor: "pointer" }}
              />
            </div>
          )}
        </div>

        {/* Post content */}
        <p className="singleArticle__item__text">{postContent}</p>
      </div>

      <div className="singleArticle__sideMenu">
        <NextList category={post.category} />
      </div>

      <div className="singleArticle__comments">
        <Comments post={post} postId={postId} />
      </div>
    </div>
  );
}

export default SingleArticle;
