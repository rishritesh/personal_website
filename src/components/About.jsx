import { useState } from "react";
import bannerImage from "../assets/rish.jpg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Full Stack Developer",
    desc1: `As Java developer Experience in designing, implementing, and managing software solutions using Java technologies. Adept at collaborating with clients and cross-functional teams to drive project success. Proven track record of delivering high-quality code on time and on budget. `,
    desc2: ` 
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="Image"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              {/* <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
