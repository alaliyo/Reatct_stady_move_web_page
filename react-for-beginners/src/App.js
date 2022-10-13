import { useState, useEffect } from "react";

function App() {
  const [conter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("api");
  const RunOnOne = () => {
    console.log("1번");
  }
  useEffect(RunOnOne, [])
  return (
    <div>
      <h1>{conter}</h1>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
