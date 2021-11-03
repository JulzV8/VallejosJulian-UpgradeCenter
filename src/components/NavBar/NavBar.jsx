import { Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="navbar">
      <div id="root-div">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li id="navButton" className="nav-item">
                <button type="button" className="btn btn-outline-light btn-sm m-1">Inicio</button>
              </li>
              <li id="navButton" className="nav-item">
                <button type="button" className="btn btn-outline-light btn-sm m-1">Catalogo</button>
              </li>
              <li id="navButton" className="nav-item">
                <button type="button" className="btn btn-outline-light btn-sm m-1">Login</button>
              </li>
              <li className="nav-item">
                <CartWidget/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Navbar>
  )
}

export default NavBar
