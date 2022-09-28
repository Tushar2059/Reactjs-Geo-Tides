import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Instructionimg from "../../Img/Instruction.png";
import BackNextBar from "./BackNextBar";
//import { Instruction_2 } from "./Instruction";
//import * as Instru from "./MajorComponents/Instruction"
import * as Instru from "./Instruction"

const Footercomp = ({ footheight, instruction ,changeNextFlag,instructionFoot}) => {
  const navigate = useNavigate();
  let [nextButton, setNextButton] = useState(false);


  useEffect(()=>{
   if(localStorage.getItem("moonDrag")=="1")
   {
    setNextButton(true);
   }
  },[]);
  const submitoperation = () => {
    console.log("hello click");
   
    if(localStorage.getItem("count")=="1" && localStorage.getItem("count1")=="1")
    //if(true)
   {
    
      changeNextFlag(1);
     // instructionFoot(Instru.Instruction_2());
     Instru.Instruction_2();
      localStorage.removeItem("dispImg");
      localStorage.removeItem("count1");
      localStorage.setItem("moonDrag",1);
     // setNextButton(true); // next button disabled
     // navigate("/letusverify/spring-neap-tides");
     navigate("/letusverify/spring-neap-1");
    
    }
   
    
     //localStorage.clear();
  };
  
  const onNext = (e) => {
    navigate("/letusverify/act1startpage/secondrectangle");
  };
  return (
    <div
      className=" d-flex justify-content-center"             
                                                  //  around=>center
      style={{ height: `${footheight}` }}
    >
      <div
        className="bg-light  col-9 d-flex justify-content-end"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
          display: "block",
        }}
      >
        <div className="col-11 d-flex align-items-center fw-normal fs-5" >
        <p style={{fontWeight:"bold",fontSize: "1.2vw",fontFamily:"arial"}}>Instruction:&nbsp; </p>
          {instruction}
        </div>
      </div>

      <div
        className="bg-light col-2 "
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
          display: "block",
          marginLeft:"2%"               // marginLeft=>added
        }}
      >
          <BackNextBar
       
      // setForward={onNext}
       clickSubmit={submitoperation}
       backvisible="visible"
       nextvisible="visible"
       submitvisible="visible"
       nextButtonDisplay={nextButton}
     />
      </div>
    </div>
  );
};

export default Footercomp;
