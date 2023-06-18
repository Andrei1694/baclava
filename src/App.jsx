import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import LoginForm from "./forms/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <LoginForm />
        <Divider />
        Already have an account ?
      </div>
    </>
  );
}

export default App;
