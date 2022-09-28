import React from "react";
// import { useNavigate } from "react-router-dom";
// import BackNextBar from "../MajorComponents/BackNextBar";
import "../MajorComponents/Mid.css";
import moonphases from "../../Img/moonphases.jpg";

const AltheoryMidContent1 = () => {
  // const navigate = useNavigate();

  // const onNext = (e) => {
  //   navigate("/letusverify/rectheory");
  // };

  return (
    <div className="overflow-auto scrollbar-primary" style={{ height: "100%",marginLeft:"2%",fontFamily:"arial" }}>
      <div className="my-5" style={{ width: "93%" }}>
        <p className="" style={{ fontWeight: "bold",fontSize: "1.5vw"}}>Objective:</p>
        <p style={{ fontSize: "1.2vw"}}>To identify spring tide and neap tide.</p>
        <p style={{ fontWeight: "bold",fontSize: "1.5vw"}}>Tides:</p>
        <ul style={{ fontSize: "1.2vw"}}>
          <li>
            The periodic rise and fall of the waters of the ocean and its
            inlets, produced by the attraction of the moon and sun, and
            occurring about every 12 hours.
            <li>A rise in a sea water level is called high tide.</li>
            <li>At the time of high tide, sea water very close to coast.</li>
            <li>A fall in a sea water level is called low tide.</li>
            <li>
              At the time of low tide, sea water is far away from the coast.
            </li>
          </li>
        </ul>
        <p style={{ fontWeight: "bold",fontSize: "1.5vw"}}>Phases of the moon:</p>
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            style={{
              maxHeight: "30%",
              maxWidth: "30%",

              //marginLeft: "25%",
              //width: "9rem",
            }}
            src={moonphases}
            alt="Logo"
          />
        </div>
        <p style={{ fontWeight: "bold",fontSize: "1.5vw"}}>How tides are formed ?</p>
        <ul style={{ fontSize: "1.2vw"}}>
          <li>
            The strong gravitational pull exerted by the sun and the moon on the
            earth’s surface causes the tides.
          </li>
          <li>
            The water of the earth closer to the moon gets pulled under the
            influence of the moon’s gravitational force and causes high tide.  
          </li>
          <li>
            During the full moon and new moon days, the sun, the moon and the
            earth are in the same line and the tides are highest.
          </li>
          <li>
            But when the moon is in its first and last quarter, the ocean waters
            get drawn in diagonally opposite directions by the gravitational
            pull of sun and moon resulting in low tides. These tides are called
            neap tides.
          </li>
        </ul>

        <p style={{ fontWeight: "bold",fontSize: "1.5vw"}}>Spring tides: </p>
        <p style={{ fontSize: "1.2vw"}}>
          During the full moon and new moon days, the sun, the moon and the
          earth are in same line and the tides are highest. These tides are
          called spring tides.
        </p>
        <p style={{ fontWeight: "bold",fontSize: "1.5vw"}}>Neap tides: </p>
        <p style={{ fontSize: "1.2vw"}}>
          When the moon is in its first and last quarter, the ocean water get
          drawn in diagonally opposite directions by gravitational pull of sun
          and earth resulting low tides. These tides are called neap tides.
        </p>

        <p style={{ fontWeight: "bold",fontSize: "1.5vw"}}>Why tides are important ?</p>
        <ul style={{ fontSize: "1.2vw"}}>
          <li>Tides are used to generate electricity(Tidal electricity).</li>
          <li>
            Tides are very important in controlling the depth and flow of water
            to help ships navigate easily near the shores. Using the advantage
            of water level and current of water during high tides, the ships can
            reach the harbor conveniently.
          </li>
          <li>
            Commercial fishermen learn how to make use of high tides to catch
            fish and take advantage of the higher gathering of fish that comes
            near the shore.
          </li>
        </ul>
      </div>

      {/* <BackNextBar
        setForward={onNext}
        backvisible="visible"
        nextvisible="visible"
        submitvisible="hidden"
      /> */}
    </div>
  );
};

export default AltheoryMidContent1;
