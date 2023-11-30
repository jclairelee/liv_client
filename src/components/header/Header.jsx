import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Header.scss";
import UserLog from "../userLog/UserLog";
import UploadIcon from "@mui/icons-material/Upload";
import SearchIcon from "@mui/icons-material/Search";
import SocialMedia from "../socialMedia/SocialMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import CreateNew from "../createNew/CreateNew";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <div className="header">
      <div
        className={screenWidth > 768 ? "header-top" : "header-top-mobileSize"}
      >
        <SocialMedia boxName={"header-top__left"} />
        <div className="header-top__right">
          <span className="header-top__text">{currentUser?.username}</span>
          <UserLog
            iconStyle={{
              display: "flex",
              alignItems: "center",
              justfyContent: "center",
              color: "white",
            }}
          />
          {/* {currentUser ? (
            <Link className="header-top__link" to="/logout">
              <LogoutIcon style={{ height: "3.5rem" }} onClick={logout} />
            </Link>
          ) : (
            <Link className="header-top__link login" to="/login">
              <span className="header-top__link login-txt">Login</span>
            </Link>
          )} */}
          <div className="header-top__link__container login-subIcons">
            {/* <Link className="header-top__link" to="/write">
              <SearchIcon style={{ height: "3.5rem" }} />
            </Link> */}
            <Link className="header-top__link" to="/write">
              <UploadIcon style={{ height: "3.5rem", color: "white" }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom__subNav">
          <Link className="header-bottom__subNavLink" to="/about">
            <span className="header-bottom__subNav__menu">About</span>
          </Link>
          <Link className="header-bottom__subNavLink" to="/apps">
            <span className="header-bottom__subNav__menu">Apps</span>
          </Link>
          <Link className="header-bottom__subNavLink" to="/books">
            <span className="header-bottom__subNav__menu">Books</span>
          </Link>
        </div>
        <div className="header-bottom__titleBox">
          <Link className="header-bottom__title" to="/" target="_blank">
            <span
              className={
                screenWidth > 768
                  ? "header-bottom__title-txt"
                  : "header-bottom__title-mobileSize"
              }
            >
              lively living
              <br />
              inspiration.
            </span>
          </Link>
        </div>
        <div className="header-bottom__subNav">
          <Link className="header-bottom__subNavLink" to="/event">
            <span className="header-bottom__subNav__menu">Event</span>
          </Link>
          <Link className="header-bottom__subNavLink" to="/posts">
            <span className="header-bottom__subNav__menu">Community</span>
          </Link>

          <Link className="header-bottom__subNavLink" to="/write">
            <span className="header-bottom__subNav__menu">Share</span>
          </Link>
        </div>
      </div>
      <div className="header-mobileBttm">
        <div className="header-mobileBttm-menu">
          <ul className="header-mobileBttm-menuList">
            <li className="header-mobileBttm-menuList__item">
              <Link to="/" className="header-mobileBttm-menuList__item-link">
                <HomeIcon />
                <span className="header-mobileBttm-menuList__item-name">
                  Home
                </span>
              </Link>
            </li>
            <li className="header-mobileBttm-menuList__item">
              <Link
                to="/posts"
                className="header-mobileBttm-menuList__item-link"
              >
                <ForumIcon />
                <span className="header-mobileBttm-menuList__item-name">
                  Communiy
                </span>
              </Link>
            </li>
            <li className="header-mobileBttm-menuList__item">
              <Link to="#" className="header-mobileBttm-menuList__item-link">
                <SearchIcon />
                <span className="header-mobileBttm-menuList__item-name">
                  Search
                </span>
              </Link>
            </li>
            <li className="header-mobileBttm-menuList__item">
              <Link to="#" className="header-mobileBttm-menuList__item-link">
                <ShoppingCartIcon />
                <span className="header-mobileBttm-menuList__item-name">
                  Cart
                </span>
              </Link>
            </li>
            <li className="header-mobileBttm-menuList__item">
              <Link
                to="/profile"
                className="header-mobileBttm-menuList__item-link"
              >
                <UserLog iconStyle={{ color: "black" }} />
                <span className="header-mobileBttm-menuList__item-name">
                  {currentUser?.username || "Login"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
