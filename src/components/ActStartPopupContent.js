import React from "react";
import { ListItemText } from "@mui/material";
const ActStartPopupContent = () => {
  return (
    <div style={{fontFamily:"arial",fontSize:"1.2vw"}}>
      <ListItemText sx={{ display: "list-item" }}>
        We will study the different positions of moon.{" "}
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        We will drag the moon on the given position to see the effect on earth.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        Based on the observation, we will answer the question.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        We will repeat the procedure for the remaining 3 positions and observe
        the effect to form different tides.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        Using this we will learn That the combined forces of the sun and the
        moon on Earth result in tidal ranges that vary based on the positions of
        the three bodies.
      </ListItemText>

      {/* <ListItemText sx={{ display: 'list-item' }}>
     Ensure you read this guide from start to finish.
    </ListItemText>
    <ListItemText sx={{ display: 'list-item' }}>
      {" "}
      The Quiz has a duration of 10 minutes and ends as soon as your time is
      elapses.
    </ListItemText>

    <ListItemText sx={{ display: 'list-item' }}>
      After clicking on Button "Agree" quiz will start alongwith time
    </ListItemText>
    <ListItemText sx={{ display: 'list-item' }}> Every question has 4 options.</ListItemText>
    <ListItemText sx={{ display: 'list-item' }}>
      Select the option which best answers the question by cliking (or
      selectig) it.
    </ListItemText>
    <ListItemText sx={{ display: 'list-item' }}>
      If the question is fill in the blanks type then it is necessary to drag
      and drop the correct option in the blank space .
    </ListItemText>
    <ListItemText sx={{ display: 'list-item' }}>
      You will have 2 chances to select correct option.
    </ListItemText>
    <ListItemText sx={{ display: 'list-item' }}>
      If you dont know the answer you may skip the question and If the
      question is attemted you cannot attemt it again. The score and timing is
      displayed on top of the screen
    </ListItemText> */}
    </div>
  );
};

export default ActStartPopupContent;
