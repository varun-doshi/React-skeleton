import { useContext, useEffect } from "react";
import "./App.css";
import UserContext from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  });

  return <div className="App">{user}</div>;
}

export default App;
