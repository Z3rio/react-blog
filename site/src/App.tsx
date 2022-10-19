import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import View from "./components/view";
import Edit from "./components/edit";
import Create from "./components/create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <div className="routes">
        <Routes>
          <Route exact path="/" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
