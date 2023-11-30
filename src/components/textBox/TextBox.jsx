import React, { useState, useEffect } from "react";
import "./TextBox.scss";

const ContentBox = ({
  contentBoxStyle,
  txtHeader,
  content,
  pic,
  isMiddleBox,
}) => {
  const contentArray = content.split("\n");
  const [content1, content2, content3] = contentArray;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // change middle text box direction
  const boxStyle = {
    display: "flex",
    padding: "0 3rem",
    flexDirection:
      isMiddleBox === 1 && windowWidth >= 992
        ? "row-reverse"
        : windowWidth < 992
        ? "column"
        : "row",
  };
  return (
    <div className="textBox-content" style={boxStyle}>
      <div className="textBox-content__text">
        <h5 className="textBox-content__text__header">{txtHeader}</h5>
        <p className="textBox-content__text__message message">
          {content1}
          <br className="message break" />
          {content2}
          <br className="message break" />
          {content3}
        </p>
      </div>
      <div className="textBox-content__pic">
        <img src={pic} alt="tart" className="textBox-content__pic__matl" />
      </div>
    </div>
  );
};
function TextBox({
  contentBoxStyle,
  title,
  txtHeader,
  content,
  pic,
  isMiddleBox,
}) {
  return (
    <div className="textBox">
      <h2 className="textBox-title">{title}</h2>

      <ContentBox
        contentBoxStyle={contentBoxStyle}
        txtHeader={txtHeader}
        content={content}
        pic={pic}
        isMiddleBox={isMiddleBox}
      />
    </div>
  );
}

export default TextBox;
