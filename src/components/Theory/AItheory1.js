import React from "react";
import Headcomp from "../MajorComponents/Headcomp";
import Middlecomp from "../MajorComponents/Middlecomp";
import AltheoryMidContent1 from "./AltheoryMidContent1";
import backgroundImg from "../../Img/backg.png";

const AItheory1 = () => {
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
        midcontent={<AltheoryMidContent1 />}
        toolvisible="hidden"
      /> */}
      <div className="d-flex  justify-content-center align-content-center" style={{height:"90%"}}>
        <div
          className="col-11 bg-light d-flex  justify-content-center "
          style={{
            height: "95%",
            borderRadius: "20px",
            boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
          }}
        >
          {/* Theory */}
          <AltheoryMidContent1/>
        </div>
      </div>
      
    </div>
  );
};

export default AItheory1;
