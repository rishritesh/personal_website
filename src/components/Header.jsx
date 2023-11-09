import { useState } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/resume.pdf";



const Header = (props) => {
  const [brandName, setBrandName] = useState("Ritesh K. Ahire");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
 
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "/hire-me",
  });

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <Link key={link.id} to={`/personal_website${link.link}`} className="hover:text-orange-600">
              {link.title}
            </Link>
          ))}
          

          {/* 
          <a href="/about" className="hover:text-orange-600">
            About
          </a>

          <a href="/skills" className="hover:text-orange-600">
            Skills
          </a>

          <a href="/Portfolio" className="hover:text-orange-600">
            Portfolio
          </a>

          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a> */}
        </div>

        <div>
          {/* buttons */}
          <a
            href={bannerImage}
            download
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
          >
            {actionButton.title}
          </a>
        </div>
      </div>
     {props.children}
    </>
  );
};

export default Header;
