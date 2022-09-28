import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import back from "../../Img/back.png";
import next from "../../Img/next.png";
import { resetAll, setShowHintButton, updateRestart } from "../../Store/Store";

const BackNextBar = ({
  setForward,
  clickSubmit,
  backvisible,
  nextvisible,
  submitvisible,
  nextButtonDisplay
}) => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let {firstStore}= useSelector((state) => state);

  const goBack = ()=>
  {
    if((localStorage.getItem("moonDrag")=="1"))
    {
     // localStorage.setItem("moonDrag",0);
     localStorage.removeItem("moonDrag");
      localStorage.setItem("dispImg",1);
      //dispatch(setShowHintButton(false)); 
      dispatch(resetAll());
       navigate(-1);
    }
    else
    {
     
     
      navigate(-1);
    }
    
   
  }

  const restart = () =>
  {
    localStorage.clear();
    dispatch(resetAll());
   
    navigate("/letusverify/");
    //document.location.reload(false);
  }

  return (

    <div className="d-flex bg-succes" style={{height:"100%"}}>
     <div className="col-6 d-flex justify-content-center align-items-center" style={{height:"100%"}}> 
     <Button
         
         // variant="contained"
          onClick={goBack}
          style={{
            visibility: `${submitvisible}`,
          }}
          //disabled={nextButtonDisplay}
          >
          <img
             className="img-fluid"
            style={{
             // backgroundRepeat: "no-repeat",
              //backgroundSize: "cover",
              maxHeight: "50%",
              maxWidth: "50%",
              //marginTop:"5%"
            }}
            src={back}
            alt="Logo"
          />

        </Button>
</div>
     <div className="col-6" style={{height:"100%"}}>

     {firstStore.restartButton ? (<Button
          variant="contained"
          onClick={restart}
          >Restart
         
        </Button>):(<Button
         // variant="contained"
          onClick={clickSubmit}
          style={{
            visibility: `${submitvisible}`,
          }}
          disabled={nextButtonDisplay}
          >
          <img
            className="img-fluid"
            style={{
              //backgroundRepeat: "no-repeat",
              //backgroundSize: "cover",
              maxHeight: "50%",
              maxWidth: "50%",
             // marginTop:"5%"
             
            }}
            src={next}
            alt="Logo"
          />
        </Button>) }
     </div>
          
   </div>
    
  );
};

export default BackNextBar;





