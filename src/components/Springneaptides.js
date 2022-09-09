import React, { useState } from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import SprinneaptidesMidContent from './SprinneaptidesMidContent'
import backgroundImg from "../Img/backg.png";
import * as Instru from "./MajorComponents/Instruction"
import Feedback1 from './Feedback1'
import { borderRadius } from '@mui/system'

const Springneaptides = () => {
  var [nextFlag,setNextFlag]=useState(0);

  var [instr,setChangeInstruction]=useState(Instru.default());

  // if(nextFlag==1)
  // {
  //   setChangeInstruction(Instru.Instruction_2());
  // }


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
      midcontent={<SprinneaptidesMidContent flag={nextFlag} instruction={setChangeInstruction} changeNextFlag={flag=>setNextFlag(flag)}/>}
      feedback={<Feedback1 flag={nextFlag}/>}
      toolvisible="hidden"
      value={nextFlag}
     
    />

    {/* <div className='bg-light' style={{height:"10%", borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)"}}></div> */}
   <Footercomp footheight="10%" instruction={instr} changeNextFlag={flag=>setNextFlag(flag)}   instructionFoot={setChangeInstruction}/>
   
    {/* <div className='d-flex justify-content-center align-content-center' >
      <div className='bg-light col-11  ' style={{height:"100%", borderRadius:"20px"}}>
         lorem

      </div>
    </div> */}
  </div>
  )
}

export default Springneaptides