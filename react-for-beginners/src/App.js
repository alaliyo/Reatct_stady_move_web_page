import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          evalue={toDo}
          type="text"
          placeholder="스케줄을 입력하세요."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ol>
        {toDos.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ol>
  </div>
  ) 
}

export default App;
