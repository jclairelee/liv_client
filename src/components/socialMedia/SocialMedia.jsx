import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialMedia({ boxName }) {
  return (
    <div className={boxName}>
      <InstagramIcon style={{ height: "3.5rem" }} />
      <TwitterIcon style={{ height: "3.5rem" }} />
      <FacebookIcon style={{ height: "3.5rem" }} />
      <GitHubIcon style={{ height: "3.5rem" }} />
    </div>
  );
}
