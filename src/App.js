import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home Link={Link}/>} />
        <Route path="/offer/:id" element={<Offer />}/>
      </Routes>
    </Router>
  );
}

export default App;
