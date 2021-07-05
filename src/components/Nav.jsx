import React, { useEffect } from "react";

function Nav() {
    useEffect()=> {
        
    }
  return (
    <div className="nav">
      <img
        className="nav-logo"
        src={process.env.PUBLIC_URL + "/images/JFlix.png"}
        alt="Logo"
      />
      <img
        className="nav-avatar"
        src={process.env.PUBLIC_URL + "/images/Netflix-avatar.png"}
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
