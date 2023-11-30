import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jasonData from "../../data.json";
import Main from "../../components/main/Main";
import PicCarousel from "../../components/picCarousel/PicCarousel";
import TextBox from "../../components/textBox/TextBox";
import tart from "./../../assets/imgs/tart.jpg";
import MediaList from "../../components/mediaList/MediaList";
import book from "../../assets/imgs/liv_magazine/Cover.jpg";
import italianPizza from "./../../assets/imgs/italianPizza.jpg";
import tandoori from "./../../assets/imgs/tandoori.jpg";
import dhansak from "./../../assets/imgs/dhansak.jpg";
import roastedChicken from "./../../assets/imgs/roastedChicken.jpg";
import workshop from "../../assets/imgs/workshop.jpg";

function Landing() {
  const videoData = jasonData.mediaData;
  const picsData = jasonData.picsData;
  const txtData = jasonData.textData;
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;
  const {
    title2,
    title,
    title3,
    content3,
    content2,
    content,
    boxStyle,
    middleBoxStyle,
  } = txtData;

  useEffect(() => {
    const getData = async () => {
      try {
        if (!category) {
          const res = await axios.get(`http://localhost:8080/posts`);
          setPosts(res.data);
        } else {
          const res = await axios.get(`http://localhost:8080/posts${category}`);
          setPosts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [category]);

  return (
    <div className="landing">
      <PicCarousel />
      <Main posts={posts} />
      <TextBox
        title={title}
        header="Who We Are"
        content={content}
        pic={tart}
        contentBoxStyle={boxStyle}
        isMiddleBox={0}
      />
      <MediaList mediaData={videoData} />
      <TextBox
        title={title2}
        txtHeader="Our Publications"
        content={content2}
        pic={book}
        contentBoxStyle={middleBoxStyle}
        isMiddleBox={1}
      />
      <MediaList
        mediaData={picsData}
        italianPizza={italianPizza}
        dhansak={dhansak}
        roastedChicken={roastedChicken}
        tandoori={tandoori}
      />
      <TextBox
        title={title3}
        txtHeader="Creative Spark Event"
        content={content3}
        pic={workshop}
        contentBoxStyle={boxStyle}
        isMiddleBox={0}
      />
    </div>
  );
}

export default Landing;
