import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import back from "../../Img/back.png";
import next from "../../Img/next.png";
import restart from "../../Img/restart.png";
import { resetAll, setShowHintButton, updateRestart } from "../../Store/Store";

const BackNextBar = ({
  setForward,
  clickSubmit,
  backvisible,
  nextvisible,
  submitvisible,
  nextButtonDisplay,
}) => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { firstStore } = useSelector((state) => state);

  const goBack = () => {
    if (localStorage.getItem("moonDrag") == "1") {
      // localStorage.setItem("moonDrag",0);
      localStorage.removeItem("moonDrag");
      localStorage.setItem("dispImg", 1);
      //dispatch(setShowHintButton(false));
      dispatch(resetAll());
      navigate(-1);
    } else {
      navigate(-1);
    }
  };

  const restartApp = () => {
   
    localStorage.clear();
    dispatch(resetAll());

    navigate("/letusverify/");
    //document.location.reload(false);
  };

  return (
    <div className="d-flex bg-succes" style={{ height: "100%" }}>
      <div
        className="col-6 d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
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
              maxHeight: "55%",
              maxWidth: "55%",
              //marginTop:"5%"
            }}
            src={back}
            alt="Logo"
          />
        </Button>
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center " style={{ height: "100%" }}>
        {firstStore.restartButton ? (
          <Link
            to="/letusverify"
            style={{ textDecoration: "none" }}
            //variant="contained"
          >
            <img
              className="img-fluid"
              style={{
                //backgroundRepeat: "no-repeat",
                //backgroundSize: "cover",
                // maxHeight: "100%",
                //maxWidth: "100%",
                marginTop: "4%",
              }}
              onClick={restartApp}
              src={restart}
              alt="Logo"
            />
          </Link>
        ) : (
          <Button
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
                maxHeight: "55%",
                maxWidth: "55%",
                // marginTop:"5%"
              }}
              src={next}
              alt="Logo"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BackNextBar;
