import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function UserLog({ iconStyle }) {
  const { currentUser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const handleLogoutClick = async () => {
    await logout();
  };

  return (
    <>
      {!currentUser || null || undefined ? (
        <Link className="header-top__link login" to="/login">
          <LoginIcon style={iconStyle} />
        </Link>
      ) : (
        <Link className="header-top__link logout" to="/logout">
          <LogoutIcon style={iconStyle} onClick={handleLogoutClick} />
        </Link>
      )}
    </>
  );
}

export default UserLog;
