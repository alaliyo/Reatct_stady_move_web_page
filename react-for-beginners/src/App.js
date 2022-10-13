import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"확인"}/>
    </div>
  );
}

export default App;
