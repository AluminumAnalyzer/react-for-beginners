// import Button from "./Button";
import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChangeTodo = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    console.log(toDos);
  };
  // useEffect(onChangeTodo, [todo]);

  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 적으세요..."
          onChange={onChangeTodo}
          value={toDo}
        ></input>
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
