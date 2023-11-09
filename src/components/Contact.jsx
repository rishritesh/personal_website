import bannerImage from "../assets/rish.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Java Developer", "Frontend Developer", "Backend Developer"], // Strings to display
//       // Speed settings, try diffrent values untill you get good results
//       startDelay: 100,
//       typeSpeed: 50,
//       backSpeed: 10,
//       backDelay: 100,
//       loop: true,
//     });

    // Destropying
//     return () => {
//       typed.destroy();
//     };
//   }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container  items-center"
    >
      {/* first dabba */}
      <div className="w-full  items-center justify-center text-white ">
        {/* text */}
        <div className=" space-y-2  ms-10" >
          {/* <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Ritesh K. Ahire</h1> */}
          
            <a href="https://www.rishahire333@gmail.com" target="_blank">Email: rishahire333@gmail.com</a>

          <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-facebook"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-youtube"></i>
            </a>

            <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
          <br />
       
        </div>
      </div>

      {/* second  dabba */}

    
    </div>
  );
};

export default Contact;
