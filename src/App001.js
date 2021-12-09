// import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log("I'll run once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("I Search for ", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("I run when counter changed");
  }, [counter]);

  useEffect(() => {
    console.log("I changed keyword or counter");
  }, [keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>How are u?!</h1>
      <h2>{counter}</h2>
      <input
        type="text"
        value={keyword}
        placeholder="Input Search Text"
        onChange={onChange}
      ></input>
      <div>{keyword === "" ? "" : "I Search for" + keyword}</div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
