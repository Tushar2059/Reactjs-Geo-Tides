import React from "react";
import backgroundImg from "../../Img/backg.png";
import Headcomp from "../MajorComponents/Headcomp";
import Middlecomp from "../MajorComponents/Middlecomp";
import HelpMidContent from "./HelpMidContent";
const Help = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      {/* <Middlecomp
        midheight="90%"
        midcontent={<HelpMidContent />}
        toolvisible="hidden"
      /> */}
      <div
        className=" d-flex justify-content-around align-items-center"
        style={{ height: "90%", width: "100%" }}
      >
        <div
          className="bg-light col-11"
          style={{
            height: "90%",

            borderRadius: "20px",
            boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
          }}
        >
         <HelpMidContent/>
        </div>
      </div>
    </div>
  );
};

export default Help;
