import React from "react";

const expression = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>Drag the moon to the earth's orbit and observe the positions of the moon.</p>
    </>
  );
};

const Instruction_1 = () => {
  return <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>Click on "Next" button.</p>;
};

const Instruction_2 = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}> Drag the moon on the marked position (+) to see the effect of full moon on earth.</p>
     
    </>
  );
};

const Instruction_33 = () => {
  return (
    <>
      {/* <li> Select the correct option.</li> */}
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}> Answer the given question.</p>
     
    </>
  );
};


const Instruction_44 = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}> Select the correct option(you can see the hint by clicking on hint button).</p>
     
    </>
  );
};

const Instruction_3 = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>
      Drag the moon in the last quarter on the marked position (+) to see the effect of moon on earth.
      </p>
    </>
  );
};

const Instruction_4 = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>
      Drag the moon on the marked position (+) to see the effect of new moon on earth.
      </p>
    </>
  );
};

const Instruction_5 = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>Drag the moon in the first quarter on the marked position (+) to see the effect of moon on earth.</p>
    </>
  );
};

const Instruction_6 = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>Activity completed successfully.</p>
    </>
  );
};

const Instruction_7 = () => {
  return (
    <>
      <p style={{fontSize: "1.2vw",fontFamily:"arial"}}>Click on "Next" button to see conclusion .</p>
    </>
  );
};

export default expression;

export {
  Instruction_1,
  Instruction_2,
  Instruction_3,
  Instruction_4,
  Instruction_5,
  Instruction_6,
  Instruction_7,
  Instruction_33,Instruction_44
};
