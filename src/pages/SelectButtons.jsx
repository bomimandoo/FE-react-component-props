import Button from "../components/Button/Button";
import { useState } from "react";


const SelectButtons = () => {
const [buttonColor, setButtonColor] = useState(0);

const handleButtonClick = (color)=> {
  {setButtonColor(color)};
};



  return <div className="selectBtns">
   
   
      <Button 
      color={buttonColor === "Primary" ? "pink" : "blue"} 
      label="Primary"
      onClick={() => handleButtonClick("Primary")}>

      </Button>

      <Button 
      color={buttonColor === "Secondary" ? "pink" : "blue"} 
      label="Secondary"
      onClick={() => handleButtonClick("Secondary")}></Button>

      <Button 
      color={buttonColor === "Default" ? "pink" : "blue"} 
      label="Default"
      onClick={() => handleButtonClick("Default")}></Button>

  </div>;
}
export default SelectButtons;
