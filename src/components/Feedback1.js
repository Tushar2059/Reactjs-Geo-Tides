import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
//import moon from "../Img/moon2d.jpg";
//import sun from "../Img/twodsun.jpg";
//import earth from "../Img/earth.png";

import moon from "../Img/moonW.jpg";
import sun from "../Img/sunwhite.jpg";
import earth from "../Img/earthwhite.jpg";
import moonDrag from "../Img/moon2d.jpg";
import { Button, Card, Collapse, Fade, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Instru from "./MajorComponents/Instruction";

import { useDispatch, useSelector } from "react-redux";
import { incrementHintPopup, setShowHintButton, updateRestart } from "../Store/Store";

const Feedback1 = (props) => {
  let dispatch = useDispatch();
  // let {firstStore}=useSelector((state)=>{state});
  let {firstStore}= useSelector((state) => state);
  let [flag1, setFlag1] = useState(false);
  let [flag2, setFlag2] = useState(false);
  let [flag3, setFlag3] = useState(false);
  let [flag4, setFlag4] = useState(false);
  var cursorX = 0;
  var cursorY = 0;
  // function handleChange(e) {
  //   cursorX = e.pageX;
  //   cursorY = e.pageY;
  //   console.log("In feedback cursorX : " + cursorX);
  //   console.log("In feedback cursorY : " + cursorY);
  // }

  //for document

  var cursorXd;
  var cursorYd;
  // document.onclick = function (e) {
  //   cursorXd = e.pageX;
  //   cursorYd = e.pageY;
  //   console.log("In document cursorXd : " + cursorXd);
  //   console.log("In document cursorXy : " + cursorYd);
  // };

  function drag(ev) {
     dispatch(incrementHintPopup(1));
     dispatch(setShowHintButton(false));   
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("src", ev.target.src);
  }

  const onClickSPringFull = () => {
    dispatch(setShowHintButton(true));  
    setFlag1(true);
   // props.instruction(Instru.Instruction_44());
   toast.error("You are wrong, please check again! you can see the hint by clicking on HINT button", {

      position: "top-center",
      autoClose: 1700,
    });
  };

  const onClickNeapLast = () => {
    dispatch(setShowHintButton(true));  
    dispatch(incrementHintPopup(2));  
    setFlag2(true);
   // props.instruction(Instru.Instruction_44());
    toast.error("You are wrong, please check again! you can see the hint by clicking on HINT button", {
      position: "top-center",
      autoClose: 1700,
    });
  };

  const onClickSPringNew = () => {
    dispatch(setShowHintButton(true));  
    dispatch(incrementHintPopup(3));  
    setFlag3(true);
    //props.instruction(Instru.Instruction_44());
    toast.error("You are wrong, please check again! you can see the hint by clicking on HINT button", {

      position: "top-center",
      autoClose: 1700,
    });
  };

  const onClickNeapFirst = () => {
    dispatch(setShowHintButton(true));  
    dispatch(incrementHintPopup(4));  
    setFlag4(true);
    // props.instruction(Instru.Instruction_44());
    toast.error("You are wrong, please check again! you can see the hint by clicking on HINT button", {

      position: "top-center",
      autoClose: 1700,
    });
  };

  return (
    <div>
      {/* Sun ,Earth ,Moon image for reference for flag 0 (zero) */}
      {/* {(props.flag == 0)  && ( */}
      {/* {(localStorage.getItem("count")!="1")  && ( */}
      {localStorage.getItem("dispImg") == "1" && (
        <div>
          <img
            className="img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "70%",
              marginTop: "3%",
              marginLeft: "10%",
              //width: "9rem",
            }}
            src={sun}
            alt="Logo"
            //onClick={handleChange}
          />
          <label style={{fontWeight:"bold", fontSize: "1.2vw",fontFamily:"arial"}}>-sun</label>
          <img
            className="img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "55%",
              marginTop: "10%",
              marginLeft: "15%",
              //width: "9rem",
            }}
            src={earth}
            alt="Logo"
            //onClick={handleChange}
          />
          <label style={{fontWeight:"bold", fontSize: "1.2vw",fontFamily:"arial"}}>-Earth</label>

          <img
            className="img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "50%",
              marginTop: "15%",
              marginLeft: "20%",
              //width: "7rem",
              //height: "6rem",
            }}
            src={moon}
            alt="Logo"
            //onClick={handleChange}
          />

          <label style={{fontWeight:"bold", fontSize: "1.2vw",fontFamily:"arial"}}>-Moon</label>
        </div>
      )}

      {/* Moon image for dragging for flag 1  *****    */}
      {/* {(localStorage.getItem("count1")=="1") && ( */}
      {/* { props.flag == 1 && ( */}
      {localStorage.getItem("moonDrag") == "1" &&
        localStorage.getItem("count") == "1" && (
          <div>
            {/* {()=>{
          localStorage.removeItem("moonDrag")
         
        // localStorage.clear();
        }} */}
            {/* <h4 className="text-center">Object</h4> */}
            <img
              className="img-fluid"
              id="drag1"
              draggable="true"
              onDragStart={(ev) => {
                drag(ev);
              }}
              style={{
                maxHeight: "100%",
                maxWidth: "50%",
                marginTop: "10%",
                marginLeft: "25%",
                cursor: "pointer",
                //width: "9rem",
              }}
              src={moonDrag}
              alt="Logo"
              //onClick={handleChange}
            />
          </div>
        )}

      {/* Checkboxes for questions */}
      {/* for Full Moon */}
      {props.flag == 2 && (
        <div className="container  bg-inf d-flex  justify-content-center " style={{height:"100%",fontSize: "1.2vw",fontFamily:"arial"}}>
        <div className="row d-flex align-items-center">
        <div className="col d-flex flex-column border rounded-pill shadow-lg p-5">
          <p className="text-center fw-bold " style={{fontSize: "1.2vw",fontFamily:"arial"}}>What do you observed?</p>

          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className=" mb-3">
                <Form.Check
                disabled={firstStore?.enableRadio}
                  inline
                  label="spring tides"
                  name="group1"
                  type={type}
                  id={`inline-spring-${type}-1`}
                  onClick={(e) => {
                    dispatch(setShowHintButton(false));  
                    props.changeValidation(1);
                    console.log(e.target.id);
                    //instruction(Instru.Instruction_3());
                    props.instruction(Instru.Instruction_3());
                    toast.success("You are correct", {
                      position: "top-center",
                      autoClose: 1700,
                    });
                  }}
                />
                <Form.Check
                disabled={firstStore?.enableRadio}
                  inline
                  label="Neap tide"
                  name="group1"
                  type={type}
                  id={`inline-neap-${type}-2`}
                  onClick={onClickSPringFull}
                />
                <br></br> <br></br>
                {/* {flag1 && <p>Spring tides full moon </p>} */}
              </div>
            ))}
          </Form>
          </div>
          </div>
        </div>
      )}

      {/* for last quarter Moon */}
      {props.flag == 3 && (
        <div className="container  bg-inf d-flex  justify-content-center " style={{height:"100%"}}>
        <div className="row d-flex align-items-center">
        <div className="col d-flex flex-column border rounded-pill shadow-lg p-5">
          <p className="text-center fw-bold" style={{fontSize: "1.2vw",fontFamily:"arial"}}>What do you observed?</p>
          {/* <label>Last quarter Moon Neap tide? :</label> */}
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className=" mb-3">
                <Form.Check
                 disabled={firstStore?.enableRadio}
                  inline
                  label="spring tides"
                  name="group1"
                  type={type}
                  id={`inline-spring-${type}-1`}
                  onClick={onClickNeapLast}
                />
                <Form.Check
                 disabled={firstStore?.enableRadio}
                  inline
                  label="Neap tide"
                  name="group1"
                  type={type}
                  id={`inline-neap-${type}-2`}
                  onClick={(e) => {
                    dispatch(setShowHintButton(false));  
                    props.changeValidation(2);
                    props.instruction(Instru.Instruction_4());
                    console.log(e.target.id);
                    //setFlag2(false);
                    toast.success("You are correct", {
                      position: "top-center",
                      autoClose: 1700,
                    });
                  }}
                />
                <br></br> <br></br>
                {/* {flag2 && <p>Neap tide last quarter moon </p>} */}
              </div>
            ))}
          </Form>
          </div>
          </div>
        </div>
      )}

      {/* for new  Moon */}
      {props.flag == 4 && (
        <div className="container  bg-inf d-flex  justify-content-center " style={{height:"100%"}}>
        <div className="row d-flex align-items-center">
        <div className="col d-flex flex-column border rounded-pill shadow-lg p-5">
        <p className="text-center fw-bold" style={{fontSize: "1.2vw",fontFamily:"arial"}}>What do you observed?</p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className=" mb-3">
                <Form.Check
                 disabled={firstStore?.enableRadio}
                  inline
                  label="spring tides"
                  name="group1"
                  type={type}
                  id={`inline-spring-${type}-1`}
                  onClick={(e) => {
                    dispatch(setShowHintButton(false));  
                    props.changeValidation(3);
                    props.instruction(Instru.Instruction_5());
                    console.log(e.target.id);
                    toast.success("You are correct", {
                      position: "top-center",
                      autoClose: 1700,
                    });
                  }}
                />
                <Form.Check
                 disabled={firstStore?.enableRadio}
                  inline
                  label="Neap tide"
                  name="group1"
                  type={type}
                  id={`inline-neap-${type}-2`}
                  onClick={onClickSPringNew}
                />
                <br></br> <br></br>
                {/* {flag3 && <p>Spring tides New moon </p>} */}
              </div>
            ))}
          </Form>
          </div>
          </div>
        </div>
      )}

      {/* for first quarter Moon */}
      {props.flag == 5 && (
        <div className="container  bg-inf d-flex  justify-content-center " style={{height:"100%"}}>
        <div className="row d-flex align-items-center">
        <div className="col d-flex flex-column border rounded-pill shadow-lg p-5">
        <p className="text-center fw-bold" style={{fontSize: "1.2vw",fontFamily:"arial"}}>What do you observed?</p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className=" mb-3">
                <Form.Check
                   disabled={firstStore?.enableRadio}
                  inline
                  label="spring tides"
                  name="group1"
                  type={type}
                  id={`inline-spring-${type}-1`}
                  onClick={onClickNeapFirst}
                />
                <Form.Check
                 disabled={firstStore?.enableRadio}
                  inline
                  label="Neap tide"
                  name="group1"
                  type={type}
                  id={`inline-neap-${type}-2`}
                  onClick={(e) => {
                    dispatch(setShowHintButton(false));  
                    props.changeValidation(2);
                    props.instruction(Instru.Instruction_6());
                    dispatch(updateRestart(true));
                    console.log(e.target.id);
                    toast.success("You are correct", {
                      position: "top-center",
                      autoClose: 1700,
                    });
                  }}
                />
                <br></br> <br></br>
                {/* {flag4 && <p>Neap tide first quarter moon </p>} */}
              </div>
            ))}
          </Form>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback1;
