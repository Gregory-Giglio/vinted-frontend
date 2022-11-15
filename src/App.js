import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

import Header from "./assets/components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [userId, setUserId] = useState(Cookies.get("userid") || null);
  const [search, setSearch] = useState("");

  const handleToken = (token, userId) => {
    if (token) {
      setToken (token);
      setUserId (userId);
      Cookies.set("token", token, {expires: 7});
      Cookies.set("userid", userId, {expires: 7});
    } else {
      setToken(null);
      Cookies.remove("token");
      setUserId(null);
      Cookies.remove("userid");
    }

  };


  return (
    <Router>
      <Header token={token} userId={userId} handleToken={handleToken} search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home search={search}/>} />
        <Route path="/offer/:id" element={<Offer />}/>
        <Route path="/signup" element={<Signup handleToken={handleToken}/>}/>
        <Route path="/login" element={<Login handleToken={handleToken}/>}/>
        <Route path="/publish" element={<Publish/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
