import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import { useRecoilValue } from "recoil";
import { userState } from "./recoil/atoms/userAtom";
import Register from "./page/Register";

function App() {
  const user = useRecoilValue(userState);
  console.log(user.length);
  return (
    <div className="App">
      {user.length === 0 ? (
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
