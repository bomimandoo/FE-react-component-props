import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";


const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];
  return (
    <div>
      
      <Box boxColor="red" text="첫번째 box"/>
      <Box boxColor="blue" text="두번째 box"/>
      <Box boxColor="green"text=" 세번째 box"/>
      <Box boxColor="pink"text="네번째 box"/>
      
    
    <div style={{display: "flex"}}>  
      {circleColorArr.map((color)=> (
        <Circle circleColor= {color}/>
      ))}
    </div>

    </div>
    
  );
};

export default BoxAlign;
