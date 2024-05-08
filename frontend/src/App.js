import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import './App.css';
import Home from './views/home';
import Payment from './views/payment';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar bg-body-tertiary px-10vw">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img src="images/logicleap.png" alt="Logo" height="40" />
            </a>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button">Button</button>
              </div>
              <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
