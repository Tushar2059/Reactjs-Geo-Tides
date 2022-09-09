import React, { useState } from "react";
import Rightsidemenu from "./Rightsidemenu";
import homeImg from "../../Img/homeimg.png";
import * as Instru from "./Instruction";
import HomeQuitPopup from "./HomeQuitPopup";
import { useNavigate } from "react-router-dom";

const Headcomp = ({ sidebarvisible }) => {
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const onAgree = () => {
    navigate("/");
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
            cursor:"pointer"
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
          }}
        >
          <div className=" fw-bold" style={{ fontSize: "1.4vw" }}>
            Geography:{" "}
            <span className="fw-normal">
            {/* {Instru.default()} */}
            Spring tides and neap tide.
            </span>
          </div>
        </div>
      </div>

      <div
        className="col-2 d-flex justify-content-center align-items-center"
        style={{ visibility: `${sidebarvisible}` }}
      >
        <Rightsidemenu />
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
