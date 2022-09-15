import React, { useState } from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import SprinneaptidesMidContent from './SprinneaptidesMidContent'
import backgroundImg from "../Img/backg.png";
import * as Instru from "./MajorComponents/Instruction"
import Feedback1 from './Feedback1'
import MainSpringNeap1 from './MainSpringNeap1'
import SprinneaptidesMidContent1 from './SprinneaptidesMidContent1'
import { useEffect } from 'react'

const Springneaptides1 = () => {
  var [nextFlag,setNextFlag]=useState(0);
  var [validation,setValidation]=useState(0);

  var [instr,setChangeInstruction]=useState(Instru.default());
 
  useEffect(()=>{
    if(localStorage.getItem("count")==1)
    {
      setChangeInstruction(Instru.Instruction_2);
    }
  },[])

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

    <Middlecomp
      midheight="80%"
      midcontent={<SprinneaptidesMidContent1 validation={validation} flag={nextFlag} instruction={setChangeInstruction} changeNextFlag={flag=>setNextFlag(flag)}/>}
      feedback={<Feedback1 changeValidation={(e)=>{setValidation(e)}} flag={nextFlag} instruction={setChangeInstruction}/>}
      //midcontent={<MainSpringNeap1 />}
      //feedback={<Feedback1 />}
      toolvisible="hidden"
      value={nextFlag}
     
    />

    {/* <div className='bg-light' style={{height:"10%", borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)"}}></div> */}
   {/* <Footercomp footheight="10%" instruction={Instru.default} changeNextFlag={flag=>setNextFlag(flag)}   instructionFoot={setChangeInstruction}/>
    */}

    {/* <Footercomp footheight="10%" instruction={Instru.default} /> */}
    <Footercomp  footheight="10%" instruction={instr} changeNextFlag={flag=>setNextFlag(flag)}   instructionFoot={setChangeInstruction}/>
    {/* in above line No use of instructionFoot in Footercomp as a props */}
   
  </div>
  )
}

export default Springneaptides1