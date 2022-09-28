import React, { useState } from "react";
import sun from "../Img/twodsun.jpg";
//import sun from "../Img/sungif3.gif";
import earth from "../Img/e34.png";
import moon from "../Img/moon2d.jpg";
import stars2 from "../Img/stars3.jpg";
import stars1 from "../Img/stars1.jpg";
import arrow from "../Img/rightarrow.jpg";
import { toast } from "react-toastify";
import * as Instru from "./MajorComponents/Instruction";
import { Button,} from "@mui/material";
import { fontFamily, fontSize } from "@mui/system";
import { fontGrid } from "@mui/material/styles/cssUtils";
import spring from "../Img/firstgif1.gif";
import { Card, Collapse, Fade } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { enableDisableRadio, setShowHintButton, updateRestart } from "../Store/Store";
import { useEffect } from "react";

import spring1 from "../Img/b1.gif";
import neap1 from "../Img/b2.gif";
import spring22 from "../Img/b3.gif";
import neap22 from "../Img/b4.gif";
//import earth from "../Img/earthwithsea.jpg";

const MainSpringNeap1 = ({ instruction, changeNextFlag,validation }) => {
  //   let [count, setCount] = useState(0);
  //   const [img_one, setImgOne] = useState(stars2);
  //     const [img_two, setImgTwo] = useState(stars2);

  //   const onDragOver = (ev) => {
  //     ev.preventDefault();
  //   };

  //   const dragStart = (ev, id, uniqueid) => {
  //     console.log("dragstartko:", id);
  //     switch (uniqueid) {
  //       case "0":
  //         ev.dataTransfer.setData("id", id);
  //         ev.dataTransfer.setData("uniqueid", uniqueid);
  //         ev.dataTransfer.setData("imagePath", ev.target.src);
  //         console.log("in drag start ",ev.target.src);
  //         break;

  //         case "1":
  //         ev.dataTransfer.setData("id", id);
  //         ev.dataTransfer.setData("uniqueid", uniqueid);
  //         ev.dataTransfer.setData("imagePath", ev.target.src);
  //         console.log("in drag start ",ev.target.src);
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  //   const drop = (ev, id) => {
  //     console.log("ss" + id);

  //     switch (id) {
  //       case "0":
  //         let id_var1 = ev.dataTransfer.getData("id");
  //         let imagePath = ev.dataTransfer.getData("imagePath");
  //         if (id_var1 != "undefined") {
  //           console.log(id_var1);
  //           console.log(id);
  //           //alert("insidedrop1");

  //           if (ev.dataTransfer.getData("uniqueid") == "0") {

  //             setImgOne(imagePath);
  //             console.log("inside drop " ,imagePath);
  //             //ev.target.src=imagePath;
  //             //document.querySelector({id_var1}).style.display = "none";
  //             document.getElementById("img_one_id").style.display = "none";
  //            // document.getElementById("img1").style.display = "none";
  //             count = count + 1;
  //             setCount(count);
  //              console.log("1st "+ count);
  //           }

  //         }
  //  break;

  //  case "1":
  //   let id_var2 = ev.dataTransfer.getData("id");
  //   let imagePath1 = ev.dataTransfer.getData("imagePath");
  //   if (id_var2 != "undefined") {
  //     console.log(id_var2);
  //     console.log(id);
  //     //alert("insidedrop1");

  //     if (ev.dataTransfer.getData("uniqueid") == "1") {

  //       setImgOne(imagePath1);
  //       console.log("inside drop " ,imagePath1);
  //       //ev.target.src=imagePath;
  //       //document.querySelector({id_var1}).style.display = "none";
  //       document.getElementById("img_two_id").style.display = "none";
  //      // document.getElementById("img1").style.display = "none";
  //       count = count + 1;
  //       setCount(count);
  //        console.log("1st "+ count);
  //     }

  //   }
  // break;

  //           default:
  //         break;
  //     }
  //   };

  let dispatch = useDispatch();
  let [textCollapse, setTextCollapse] = useState(false);
  let [earth1, setEarth1] = useState(earth);

  let [msg, setMsg] = useState("");
  let [harrowfull, setHarrowfull] = useState(false);

  let [hint, setHint] = useState(stars2);

  // let [flag1, setFlag1] = useState(false);
  // let [flag2, setFlag2] = useState(false);
  // let [flag3, setFlag3] = useState(false);
  // let [flag4, setFlag4] = useState(false);

  let [path1, setPath1] = useState(stars2);
  let [path2, setPath2] = useState(stars2);
  let [path3, setPath3] = useState(stars2);
  let [path4, setPath4] = useState(stars2);

  let [count, setCount] = useState(1);

  function drop(ev, id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    var src1 = ev.dataTransfer.getData("src");
    if (data != ev.target.id)
      document.getElementById(data).style.display = "none";
    // ev.target.appendChild(document.getElementById(data));
    //ev.target.src=data;

    switch (id) {
      case "1":
        // var data = ev.dataTransfer.getData("id");
        //var src = ev.dataTransfer.getData("src");
        // ev.target.src=src1;
        // ev.target.id=data
        //document.getElementById(data).style.display="none"
        // setPath(src1);
        console.log("switch case " + src1);
        //setFlag1(true);
        setCount(count + 1);
        break;
      case "2":
        // setFlag2(true);
        setCount(count + 1);
        break;
      case "3":
        // setFlag3(true);
        setCount(count + 1);
        break;
      case "4":
        //   setFlag4(true);

        setCount(0);
        //document.getElementById(data).style.display="block"
        break;

      default:
        alert();
        break;
    }

    //  if(count==0)
    //  {
    //   setFlag1(true);
    //   setCount(count+1);
    //  }
    //  else if(count==1)
    //  {
    //   setFlag2(true);
    //   setCount(count+1);
    //  }
    //  else if(count==2)
    //  {
    //   setFlag3(true);
    //   setCount(count+1);
    //  }
    //  else if(count==3)
    //  {
    //   setFlag4(true);
    //   setCount(0);
    //  }
    //  else{
    //   alert("please drag at corrrect position");
    //  }
  }

  function drop1(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    document.getElementById(data).style.display = "none";
    // ev.target.appendChild(document.getElementById(data));

    //ev.target.src=data;
    //setFlag2(true);
  }

  function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    document.getElementById(data).style.display = "none";
    //ev.target.appendChild(document.getElementById(data));

    //ev.target.src=data;
    //setFlag3(true);
  }

  function drop3(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    document.getElementById(data).style.display = "none";
    //ev.target.appendChild(document.getElementById(data));

    //ev.target.src=data;
    //setFlag4(true);
  }

  function drag4(ev) {
    console.log("in drag start 4 - div drag start " + ev.target.id);

    ev.dataTransfer.setData("id", ev.target.id);
  }
useEffect(()=>
{ 
 
  dispatch(setShowHintButton(false));

},[])
  //drag start object
  function drag1(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("src", ev.target.src);
    setTextCollapse(true);
    
  }
  //drag over object
  function allowDrop(ev) {
    ev.preventDefault();
    setTextCollapse(false);
  }

  //drop object
  function dropFull(ev, id) {
   
    var data = ev.dataTransfer.getData("id");
    var src1 = ev.dataTransfer.getData("src");
    //document.getElementById(data).style.display="none"
    console.log("Count in drop Full 1 = " + count);
     
    if (id == 1 && count == 1 && ev.target.src != src1 && validation==0) {
      //alert("in if drop full");
      // alert()
      dispatch(setShowHintButton(false));
      document.getElementById(data).style.display = "none";
      // document.getElementById(data).src="../Img/stars3.jpg";

      setPath1(src1);
      count = count + 1;

      console.log("Count in drop Full 2 =" + count);

      changeNextFlag(2);
      setTimeout(() => {
        setTextCollapse(!textCollapse);
        setMsg("Tides formed due to gravitional pull of moon and sun");
        instruction(Instru.Instruction_33());
        setCount(count);
        dispatch(enableDisableRadio(false));
        // setTimeout(() => {
        //   setTextCollapse(!textCollapse);
        // }, 3600);
      }, 3500);
      
      setHarrowfull(true);
      setEarth1(spring1);
    }
    else if(id == 1  && ev.target.src == src1)
    {
       //alert("done");

       setTextCollapse(true);
    }
    //alert("please place moon at correct position");
    else {
     
      toast.error("please place moon at correct position", {
        position: "top-center",
        autoClose: 1700,
      });
      // console.log("drop image id =>  ",ev.target.src);
      // console.log("drag image id =>  ",src1);
      // console.log("id and count  => "+ id +" , " +count);
      
    }
  }

  function dropLast(ev, id) {
    var data = ev.dataTransfer.getData("id");
    var src2 = ev.dataTransfer.getData("src");
    //document.getElementById(data).style.display="none"
    dispatch(enableDisableRadio(true));
    console.log("Count in drop Last 1 =" + count);
    //dispatch(setShowHintButton(false));  
    if (id == 2 && count == 2 && validation==1) {
      dispatch(setShowHintButton(false));
      document.getElementById(data).style.display = "none";
      setPath2(src2);
      console.log("in last " + src2);
      count = count + 1;
      //setCount(count);
      console.log("Count in drop Last 2 =" + count);
      //instruction(Instru.Instruction_4());
      changeNextFlag(3);
      setTimeout(() => {
        setTextCollapse(!textCollapse);
        setMsg("Tides formed due to gravitional pull of moon and sun");
        instruction(Instru.Instruction_33());
        setCount(count);
        dispatch(enableDisableRadio(false));
      }, 3500);

      //instruction(Instru.Instruction_33());
      //setMsg("Tides formed due to gravitional pull of moon and sun");
      //setHarrowfull(false);
     // setTextCollapse(true);
      setEarth1(neap1);
      
    } 
    else if(id == 2  && ev.target.src == src2)
    {
       //alert("done");
       setTextCollapse(true);
    }
    else if(validation!=1 && ev.target.src != src2 && validation==0)
    {
      //alert(validation)
      // toast.error("Please select the correct option", {
      //   position: "top-center",
      //   //autoClose: 1700,
      // })
      setTextCollapse(true);
    }

    else {
      // toast.error("please place moon at correct position", {
      //   position: "top-center",
      //   autoClose: 1700,
      // });
    }
  }

  function dropNew(ev, id) {
    var data = ev.dataTransfer.getData("id");
    var src3 = ev.dataTransfer.getData("src");
    //document.getElementById(data).style.display="none"
    dispatch(enableDisableRadio(true));
    console.log("Count in drop Last 1 =" + count);
   // dispatch(setShowHintButton(false));  
    if (id == 3 && count == 3 && validation==2) {
      dispatch(setShowHintButton(false));
      document.getElementById(data).style.display = "none";
      setPath3(src3);
      console.log("in last " + src3);
      count = count + 1;
     // setCount(count);
      console.log("Count in drop Last 2 =" + count);
      //instruction(Instru.Instruction_5());
      changeNextFlag(4);
      setTimeout(() => {
        setTextCollapse(!textCollapse);
        setMsg("Tides formed due to gravitional pull of moon and sun");
        instruction(Instru.Instruction_33());
        setCount(count);
        dispatch(enableDisableRadio(false));
      
      }, 3500);
      //instruction(Instru.Instruction_33());
      //setMsg(" Tides formed due to gravitional pull of moon and sun");
      //setTextCollapse(true);
      setEarth1(spring22);
    } 
    else if(id == 3  && ev.target.src == src3)
    {
       //alert("done");
       setTextCollapse(true);
    }
    else if(validation!=2)
    {
     // alert(validation)
      // toast.success("Please select the correct option", {
      //   position: "top-center",
      //   //autoClose: 1700,
      // })
      setTextCollapse(true);
    }
    
    else {
      // toast.error("please place moon at correct position", {
      //   position: "top-center",
      //   autoClose: 1700,
      // });
    }
  }

  function dropFirst(ev, id) {
    var data = ev.dataTransfer.getData("id");
    var src4 = ev.dataTransfer.getData("src");
    //document.getElementById(data).style.display="none"
    dispatch(enableDisableRadio(true));
    console.log("abcdefgh" + stars2);
    console.log("Count in drop Last 1 =" + count);
   // dispatch(setShowHintButton(false));  
    if (id == 4 && count == 4 && validation==3) {
      dispatch(setShowHintButton(false));
      document.getElementById(data).style.display = "none";
      setPath4(src4);
      console.log("in last " + src4);
      // count=count+1;
      count = count + 1;
      //setCount(count);
      console.log("Count in drop Last 2 =" + count);
     // instruction(Instru.Instruction_6());
      changeNextFlag(5);
      setTimeout(() => {
        setTextCollapse(!textCollapse);
        setMsg("Tides formed due to gravitional pull of moon and sun");
        instruction(Instru.Instruction_33());
        setCount(count);
        dispatch(enableDisableRadio(false));
        
      }, 3500);
      //instruction(Instru.Instruction_33());
      //setMsg("Tides formed due to gravitional pull of moon and sun");
      //setTextCollapse(true);
      //localStorage.clear();
      setEarth1(neap22);
    }
    else if(id == 4  && ev.target.src == src4)
    {
       //alert("done");
       setTextCollapse(true);
    }
    else if(validation!=3)
    {
      // toast.success("Please select the correct option", {
      //   position: "top-center",
      //   //autoClose: 1700,
      // })
      setTextCollapse(true);
    }
    
    else {
      // toast.error("please place moon at correct position", {
      //   position: "top-center",
      //   autoClose: 1700,
      // });
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <div className="d-flex " style={{ height: "100%" }}>
        {/* first vertical div */}
        <div
          className="bg-inf col-3 d-flex align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <img
            className="img-fluid"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
              marginTop: "1%",
              width: "18.75rem",
              height: "auto",
            }}
            src={sun}
            alt="Logo"
          />
        </div>

        {/* second vertical div */}
        <div className="bg-warnin col-3 d-flex align-items-center justify-content-center">
          <div className="bg-succes " style={{ height: "33%", width: "100%" }}>
            {/* new */}
            <img
              className="img-fluid"
              id="drag4"
              src={path3}
              style={{
                maxHeight: "40%",
                maxWidth: "50%",
                marginTop: "20%",
                marginLeft: "60%",
              }}
              draggable="true"
              onDragStart={(ev) => {
                drag1(ev);
              }}
              onDrop={(ev) => {
                dropNew(ev, 3);
              }}
              onDragOver={(ev) => {
                allowDrop(ev);
              }}
            />
          </div>
        </div>

        {/* third vertical div - inside again three div */}
        <div className="bg-succes col-3">
          <div id="id2" className="bg-succes " style={{ height: "33%" }}>
            {/* lastq */}
            <img
              className="img-fluid"
              id="drag3"
              src={path2}
              style={{
                maxHeight: "40%",
                maxWidth: "50%",
                marginTop: "20%",
                marginLeft: "38%",
              }}
              draggable="true"
              onDragStart={(ev) => {
                drag1(ev);
              }}
              onDragOver={(ev) => {
                allowDrop(ev);
              }}
              onDrop={(ev) => {
                dropLast(ev, 2);
              }}
            />
          </div>
          {/* earth div */}
          <div
            className="bg-dar d-flex align-items-center justify-content-center"
            style={{ height: "34%" }}
          >
            <img
              className="img-fluid "
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // maxHeight: "100%",
                // maxWidth: "100%",
                // width: "7rem",
                // height: "17rem"
                // marginTop: "10%",
              }}
              src={earth1}
              alt="Logo"
            />
          </div>

          <div className="bg-succes " style={{ height: "33%" }}>
            {/* firstq */}
            <img
              className="img-fluid"
              id="drag4"
              src={path4}
              style={{
                maxHeight: "40%",
                maxWidth: "50%",
                marginTop: "20%",
                marginLeft: "38%",
              }}
              draggable="true"
              onDragStart={(ev) => {
                drag1(ev);
              }}
              onDrop={(ev) => {
                dropFirst(ev, 4);
              }}
              onDragOver={(ev) => {
                allowDrop(ev);
              }}
            />
          </div>
        </div>

        {/* fourth vertical div -again inside 2 div */}
        <div style={{ height: "100%", width: "100%" }}>
          <div
            id="id1"
            className="bg-dar col-12 d-flex align-items-center justify-content-center"
            style={{ height: "33%" }}
          ></div>
          <div
            className="bg-succes "
            style={{ height: "33%" }}
            // onDrop={(ev) => {
            //   drop(ev,'1');
            // }}
            // onDragOver={(ev) => {
            //   allowDrop(ev);
            // }}
            // onDragStart={(ev) => {
            //    drag4(ev);
            //  }}
          >
            {/* full */}

            {/* {harrowfull     && (
            <img  
               className="img-fluid"
               src={arrow}
               style={{
                maxHeight: "40%",
                maxWidth: "15%",
                marginTop: "20%",
                //marginLeft: "60%",
                
              }}
           />
          )} */}

            <img
              className="img-fluid"
              id="drag2"
              src={path1}
              style={{
                maxHeight: "40%",
                maxWidth: "50%",
                marginTop: "20%",
                marginLeft: "10%",
              }}
              draggable="true"
              onDragStart={(ev) => {
                drag1(ev);
              }}
              onDrop={(ev) => {
                dropFull(ev, 1);
              }}
              onDragOver={(ev) => {
                allowDrop(ev);
              }}
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-info">
        <Collapse in={true}>
          <p
            className="text-center"
            style={{
              fontFamily: "arial",
              fontSize: "1.2vw",
              fontWeight: "bold",
            }}
          >
            {msg}
          </p>
        </Collapse>
      </div> */}
       <div className="d-flex justify-content-center align-content-center">
      {/* <Collapse in={textCollapse} dimension="height" >
          <div id="example-collapse-text">
            <Card className="alert alert-success fw-bold" style={{height:"65%",fontFamily:"arial",fontSize:"1.2vw"}}>
              {msg}
            </Card>
           
          </div>
        </Collapse> */}
        <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>{msg}</p>
     </div>
      {/* <p style={{fontFamily="arial" fontSize="1.2vw"}}>{msg}</p> */}
      {/* <Button onClick={()=>{
        hint = stars1; 
        setHint(stars1);
        setPath1(stars1);
        setPath2(stars1);
        setPath3(stars1);
        setPath4(stars1); 
        alert(hint) }}>Hint</Button> */}
    </div>
  );
};

export default MainSpringNeap1;


