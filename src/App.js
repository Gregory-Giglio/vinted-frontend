import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Header from "./assets/components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      setToken (token);
      Cookies.set("token", token, {expires: 7});
    } else {
      setToken(null);
      Cookies.remove("token");
    }

  };


  return (
    <Router>
      <Header token={token} handleToken={handleToken}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />}/>
        <Route path="/signup" element={<Signup handleToken={handleToken}/>}/>
        <Route path="/login" element={<Login handleToken={handleToken}/>}/>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
