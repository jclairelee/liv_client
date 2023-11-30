import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Main from "../../components/main/Main";
function ArticleList() {
  const category = useLocation().search;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        if (!category) {
          const res = await axios.get(`http://localhost:8080/posts`);
          setPosts(res.data);
        } else {
          const res = await axios.get(`http://localhost:8080/posts${category}`);
          setPosts(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [category]);

  return (
    <div>
      <Main posts={posts} cat={category} />
    </div>
  );
}

export default ArticleList;
