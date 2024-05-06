import "./Circle.css";

const circle = (props) => {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: props.circleColor || "black",
       
      }}
    >
      <p>{props.text}</p>
    </div>
    
    
    
  );
};

export default circle;

