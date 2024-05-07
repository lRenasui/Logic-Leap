import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/home';


function App() {
  return (
    <Router>
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="images/logicleap.png" alt="Logo" height="40" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mb-4 mb-lg-0">
          <li class="nav-item me-3"><a class="nav-link active" aria-current="page" href="#">Dashboard</a></li>
          <li class="nav-item me-3"><a class="nav-link active" aria-current="page" href="#">Sales</a></li>
          <li class="nav-item me-3"><a class="nav-link active" aria-current="page" href="#">Costumers</a></li>
          <li class="nav-item me-3"><a class="nav-link active" aria-current="page" href="#">Packages</a></li>
          <li class="nav-item me-3"><a class="nav-link active" aria-current="page" href="#">Products</a></li>
          <li class="nav-item me-3"><a class="nav-link active" aria-current="page" href="#">Custom Plans</a></li>
          <li class="nav-item me-3"><a class="nav-link active" aria-current="page" href="#">Support</a></li>
        </ul>
        <ul class="navbar-nav ms-auto"> 
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-bell"></i></a> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-user-circle"></i></a> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
