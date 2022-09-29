import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import * as Instru from "./Instruction"
import backgroundImg from "../../Img/backg.png";
import start from "../../Img/start.png";

const Launchpage = () => {

  return (
    <div
      className="flex-column d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "arial",
      }}
    >
      <div
        className="col-12 col-md-9 border border-light border-2 "
        style={{
          height: "75vh",
          background: "rgba(255, 255, 255, .45)",
          border: "3px solid rgba(255, 255, 255, .5)",
          backdropFilter: "blur(5px)",
          borderRadius: "20px",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center fw-bolder "
          style={{ height: "15vh", color: "#ac3843", fontSize: "2.5vw" }}
        >
          Spring tides and neap tides.
        </div>
        <div className="" style={{ height: "20vh" }}>
          <div
            className="d-flex justify-content-center align-items-center fw-bolder"
            style={{ height: "10vh", fontSize: "2.0vw" }}
          >
            Objective:
          </div>
          <div
            className="d-flex justify-content-center align-items-center fw-normal"
            style={{ height: "5vh", fontSize: "1.8vw",fontFamily: "arial", }}
          >
            {/* To verify the algebraic identity {Instru.default()} */}
            To identify spring tides and neap tides.
          </div>
        </div>
        <div className="" style={{ height: "27vh" }}>
          <div
            className="d-flex justify-content-center align-items-center fw-bolder"
            style={{ height: "5vh", fontSize: "2.0vw" }}
          >
            Learning Outcome: 
           
          </div>
          
          <div
            className="fw-normal d-flex justify-content-center align-items-center flex-column  "
            style={{ height: "15vh", fontSize: "1.5vw" }}
          >
            <div className="text-center">
            1. Student will be able to understand types of tides. {" "}
            
            </div>
            <div className="text-center">
            2. Student will be able to understand different positions of moon.
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ height: "13vh" }}
        >
          <Link to="/letusverify" style={{ textDecoration:"none"  }}>
            {/* <div
            
              className="btn px-5 "
              style={{
                fontWeight: "700",
                fontSize: "2.0vw",
                background: " #eeeee6",
                color: "#5f5299",
                borderRadius: "50px",
                boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Start
            </div> */}
            <img
              className="img-fluid"
              style={{
                //backgroundRepeat: "no-repeat",
                //backgroundSize: "cover",
                 maxHeight: "80%",
                maxWidth: "80%",
                //marginTop: "4%",
              }}
             src={start}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Launchpage;
