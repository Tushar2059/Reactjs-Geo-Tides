import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../Img/back.png";
import next from "../../Img/next.png";

const BackNextBar = ({
  setForward,
  clickSubmit,
  backvisible,
  nextvisible,
  submitvisible,
  nextButtonDisplay
}) => {
  const navigate = useNavigate();


  const goBack = ()=>
  {
    if((localStorage.getItem("moonDrag")=="1"))
    {
     // localStorage.setItem("moonDrag",0);
     localStorage.removeItem("moonDrag");
      localStorage.setItem("dispImg",1);
       navigate(-1);
    }
    else
    navigate(-1);
   
  }

  return (
    <div className=" d-flex  " style={{ height: "10%" }}>
      <div className="col-4  d-flex justify-content-end " style={{}}>
        {/* <Button
          onClick={() => {
            navigate(-1);
          }}
          style={{
            height: "100%",
            visibility: `${backvisible}`,
          }}
        >
        
          <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "200%",
              maxWidth: "200%",
            }}
            src={back}
            alt="Logo"
          />
         
        </Button> */}
      </div>
      <div
        className=" col-4  d-flex justify-content-center align-items-center mt-4"
        style={{}}
      >
       <Button
          //variant="contained"
          onClick={goBack}
          style={{
            visibility: `${submitvisible}`,
          }}
          //disabled={nextButtonDisplay}
          >
          <img
             className="img-fluid"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "130%",
              maxWidth: "130%",
              marginTop:"20%"
            }}
            src={back}
            alt="Logo"
          />
        </Button>
      
      <Button
          //variant="contained"
          onClick={clickSubmit}
          style={{
            visibility: `${submitvisible}`,
          }}
          disabled={nextButtonDisplay}
          >
          <img
            className="img-fluid"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "130%",
              maxWidth: "130%",
              marginTop:"20%"
            }}
            src={next}
            alt="Logo"
          />
        </Button>
        {/* <Button
          variant="contained"
          onClick={clickSubmit}
          style={{
            visibility: `${submitvisible}`,
          }}
          disabled={nextButtonDisplay}
          >
          Next
        </Button> */}

        



      </div>
      <div className=" col-4 " style={{}}>
        {/* <Button
          style={{ height: "100%", visibility: `${nextvisible}` }}
          onClick={setForward}
        >
          <img
            className=""
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "200%",
              maxWidth: "200%",
            }}
            src={next}
            alt="Logo"
          />
        </Button> */}
      </div>
    </div>
  );
};

export default BackNextBar;
