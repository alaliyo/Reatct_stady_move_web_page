import { useState, useEffect } from "react";

function App() {
  const [keyword, setkeyword] = useState("");
  const [conter, setValue] = useState(0);
  
  const onChange = (event) => setkeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log("api");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("keyword");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("conter");
  }, [conter])

  useEffect(() => {
    console.log("메롱")
  }, [conter, keyword])


  
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색창"
      />
      <h1>{conter}</h1>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
