import { useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //  const [isVisible, setIsVisible] = useState(false);

  //  const handleToggle = () => {
  //    setIsVisible(!isVisible);
  //  };

  return (
    <div>
      <Description />
      <Options />
      {/* <button onClick={handleToggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && ()} */}
      <Feedback feedback={feedback} />
    </div>
  );
};
export default App;

// const App = () => {
//   const [values, setValues] = useState({
//   good: 0,
// 	neutral: 0,
// 	bad: 0
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };
