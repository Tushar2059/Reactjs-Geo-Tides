import React, { useState } from "react";
import Rightsidemenu from "./Rightsidemenu";
import homeImg from "../../Img/homeimg.png";
import hint from "../../../src/Img/hint.png";
import * as Instru from "./Instruction";
import HomeQuitPopup from "./HomeQuitPopup";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HintPopup from "./HintPopup";
import { useDispatch, useSelector } from "react-redux";
import { resetAll } from "../../Store/Store";

const Headcomp = ({ sidebarvisible,hintVisible }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [showHintDialog, setShowHintDialog] = useState(false);

  let { firstStore } = useSelector((state) => state);
  let dispatch = useDispatch();

  const navigate = useNavigate();

  const openDialog = () => {
     dispatch(resetAll());  //reset all store variables/states (not reqd)
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setShowHintDialog(false);
  };

  const onAgree = () => {
    dispatch(resetAll());  //reset all store variables/states (not reqd)
    navigate("/");
  };

  const openHintDialog = () => {
    setShowHintDialog(true);
  };

  return (
    <div className="d-flex" style={{ height: "10%" }}>
      <div className="col-2  d-flex justify-content-center align-items-center">
        <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "100%",
            cursor: "pointer",
          }}
          src={homeImg}
          alt="Logo"
          onClick={openDialog}
        />
        <HomeQuitPopup
          openDialog={showDialog}
          onAgree={onAgree}
          closeDialog={closeDialog}
        />
      </div>

      <div className="col-8  d-flex justify-content-center align-items-center">
        <div
          className=" px-5 border border-2 d-flex justify-content-center align-items-center "
          style={{
            height: "90%",
            borderRadius: "25px",
            background: "skyblue",
            //background: "rgba(255, 255, 255, .45)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className=" fw-bold" style={{ fontSize: "1.4vw",fontFamily:"arial" }}>
            Geography:{" "}
            <span className="fw-normal">
              {/* {Instru.default()} */}
              Spring tides and neap tide.
            </span>
          </div>
        </div>
      </div>

      <div className="col-2 d-flex">
        <div className="col-4 bg-inf">
          {/* <Button variant="contained" style={{marginTop:"10%"}} onClick={openHintDialog}>Hint</Button> */}

          {/* {(firstStore?.showHintButton) && ( */}

          <Button
            disabled={!firstStore?.showHintButton}
           // variant="contained"
           // onClick={openHintDialog}
            //style={{ marginTop: "20%", visibility:hintVisible ,
            // maxWidth: "80%",
           //maxHeight: "80%",
          // minWidth: "40%",
           //minHeight: "40%"
      
    
            //}}
           
          >
          <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "100%",
            maxWidth: "100%",
            cursor: "pointer",
            marginTop:"15%",
            visibility:hintVisible
            
            //visibility: "hidden"
          }}
          src={hint}
          alt="Logo"
          onClick={openHintDialog}
      
        />
           
          </Button>
          {/* <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "100%",
            maxWidth: "65%",
            cursor: "pointer",
            marginTop:"15%",
            
            //visibility: "hidden"
          }}
          src={hint}
          alt="Logo"
          onClick={openHintDialog}
      
        /> */}

          {/* )}  */}

          <HintPopup
            openHintDialog={showHintDialog}
            closeHintDialog={closeDialog}
          />
        </div>
        <div
          className="col-8 bg-inf d-flex justify-content-start"
          style={{ visibility: `${sidebarvisible}` }}
        >
          <Rightsidemenu />
        </div>
      </div>
    </div>
  );
};

export default Headcomp;

// import React from "react";
// import { Link } from "react-router-dom";
// import Rightsidemenu from "./Rightsidemenu";
// import homeImg from "../../Img/homeimg.png"
// import * as Instru from "./Instruction"

// const Headcomp = ({sidebarvisible}) => {
//   return (
//     <div className="d-flex" style={{height:"10%"}}>
//       <div className="col-2  d-flex justify-content-center align-items-center" >
//         <Link to="/">
//           <img
//             className=""
//             style={{
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               maxHeight: "100%",
//             }}
//             src={homeImg}
//             alt="Logo"
//           />
//         </Link>
//       </div>

//       <div className="col-8  d-flex justify-content-center align-items-center" >
//         <div
//           className=" px-5 border border-2 d-flex justify-content-center align-items-center "
//           style={{
//             height: "90%",
//             borderRadius: "25px",
//             background: "skyblue",
//           }}
//         >
//           <div className=" fw-bold" style={{ fontSize: "1.4vw" }}>
//             {/* Algebraic Identity: <span className="fw-normal">{Instru.default()}</span>  */}
//             Geography: <span className="fw-normal">Spring tides and neap tides</span>
//           </div>
//         </div>
//       </div>

//       <div className="col-2 d-flex justify-content-center align-items-center" style={{visibility:`${sidebarvisible}`}}>
//        <Rightsidemenu/>
//       </div>
//     </div>
//   );
// };

// export default Headcomp;
