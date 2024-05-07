import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="images/logicleap.png" alt="Logo" height="40" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <li className="nav-item me-3"><Link className="nav-link active" to="/">Dashboard</Link></li>
                      <li className="nav-item me-3"><Link className="nav-link" to="/sales">Sales</Link></li>
                      <li className="nav-item me-3"><Link className="nav-link" to="/customers">Customers</Link></li>
                      <li className="nav-item me-3"><Link className="nav-link" to="/packages">Packages</Link></li>
                      <li className="nav-item me-3"><Link className="nav-link" to="/products">Products</Link></li>
                      <li className="nav-item me-3"><Link className="nav-link" to="/custom-plans">Custom Plans</Link></li>
                      <li className="nav-item me-3"><Link className="nav-link" to="/support">Support</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-bell"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-user-circle"></i></a>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
