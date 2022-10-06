import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";

import Slide from '@mui/material/Slide';
import {  useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HintPopup = ({ openHintDialog,closeHintDialog }) => {
    let {firstStore}= useSelector((state) => state);


  return (
    <>
      <Dialog open={openHintDialog} TransitionComponent={Transition} >
        <DialogContent>
          <Typography className="text-center" style={{fontSize:"1.2vw", fontFamily:"arial", fontWeight:"bold"}}>Hint</Typography>
          {(firstStore?.hintPopup)==1 && (
            <Typography style={{fontSize:"1.2vw", fontFamily:"arial"}}>During full moon the sun, the earth and the moon come to lie in a straight line it causes - Spring tide</Typography>
          )}
          {(firstStore?.hintPopup)==2 && (
            <Typography style={{fontSize:"1.2vw", fontFamily:"arial"}}>During last quarter moon, the sun, the earth and the moon come in right angle it causes - Neap tide</Typography>
          )}
          {(firstStore?.hintPopup)==3 && (
            <Typography style={{fontSize:"1.2vw", fontFamily:"arial"}}>During New moon the sun, the earth and the moon come to lie in a straight line it causes - Spring tide</Typography>
          )}
          {(firstStore?.hintPopup)==4 && (
            <Typography style={{fontSize:"1.2vw", fontFamily:"arial"}}>During first quarter moon, the sun, the earth and the moon come in right angle it causes - Neap tide</Typography>
          )}
         
          
     
       
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-around" }}>
          {/* <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onAgree}
          >
            Yes
          </Button> */}
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={closeHintDialog}
            
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HintPopup;
