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
          {/* <Typography>This is hint popup</Typography> */}
          {(firstStore?.hintPopup)==1 && (
            <Typography>During full moon the sun, the earth and the moon come to lie in a straight line it causes - Spring tide</Typography>
          )}
          {(firstStore?.hintPopup)==2 && (
            <Typography>During last quarter moon, the sun, the earth and the moon come in right angle it causes - Neap tide</Typography>
          )}
          {(firstStore?.hintPopup)==3 && (
            <Typography>During New moon the sun, the earth and the moon come to lie in a straight line it causes - Spring tide</Typography>
          )}
          {(firstStore?.hintPopup)==4 && (
            <Typography>During first quarter moon, the sun, the earth and the moon come in right angle it causes - Neap tide</Typography>
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
