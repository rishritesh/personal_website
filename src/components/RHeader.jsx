import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./RHeader.css"; // Import your CSS file
import '../Rheader.css'

const RHeader = (props) => {
  const [brandName, setBrandName] = useState("Ritesh K. Ahire");
  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "/hire-me",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="brand-logo">
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className={`menu-links ${isMobile ? "hidden" : "flex"}`}>
          {/* menu links */}
          <Link to="/about" className="hover-text-orange">
            About
          </Link>

          <Link to="/skills" className="hover-text-orange">
            Skills
          </Link>

          <Link to="/portfolio" className="hover-text-orange">
            Portfolio
          </Link>

          <Link to="/contact" className="hover-text-orange">
            Contact
          </Link>
        </div>

        <div className="action-button">
          {/* buttons */}
          <a
            href={actionButton.link}
            className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default RHeader;
