// import Button from "./Button";
import { useEffect, useState } from "react";

function Hello() {
  const destroyFn = () => {
    console.log(`Hello component is destroyed`);
  };

  const effectFn = () => {
    console.log(`Hello component is created`);
    return destroyFn;
  };
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hidden" : "Show"} </button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
