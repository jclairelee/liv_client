import React, { useState, useEffect } from "react";
import "./MediaList.scss";

function MediaList({
  mediaData,
  italianPizza,
  dhansak,
  roastedChicken,
  tandoori,
}) {
  const [mediaType, setMediaType] = useState(0);
  const imageSources = [italianPizza, dhansak, roastedChicken, tandoori];

  useEffect(() => {
    for (const m of mediaData) {
      if (m.link.endsWith("jpg")) {
        setMediaType(1);
        break;
      }
    }
  }, [mediaData]);

  return (
    <div className={`mediaList${mediaType === 1 ? "__picStyle" : ""}`}>
      {mediaData.map((media, index) => (
        <div
          className={`mediaList-innerBox${mediaType === 1 ? "__picStyle" : ""}`}
          key={index}
        >
          <h5 className="mediaList-header">{media.header}</h5>
          <div className="mediaList-media">
            <div className="mediaList-media__inside">
              {mediaType === 0 ? (
                // <video
                //   className="mediaList-media__video"
                //   src={media.link}
                //   autoPlay
                //   muted
                //   controls
                // >
                //   <source />
                // </video>
                <iframe
                  className="mediaList-media__video"
                  title={media.title}
                  width="560"
                  height="315"
                  src={media.link}
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="mediaList-media__pic" key={index}>
                  <img
                    src={imageSources[index % imageSources.length]}
                    alt={`Image of ${media.picTitle}`}
                    className="mediaList-media__pic-file"
                  />
                </div>
              )}
              <div className="mediaList-media__text">
                <h5 className="mediaList-media__text__title">{media.title}</h5>
                <span className="mediaList-media__text__content">
                  {media.desc}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MediaList;
