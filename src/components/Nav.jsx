import React, { useEffect, useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // actives scroll at specific y-axis scroll value
      if (window.scrollY > 1) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src={process.env.PUBLIC_URL + "/images/JasonFlix.png"}
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
