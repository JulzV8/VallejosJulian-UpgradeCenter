import { Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="navbar">
      <div id="root-div">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li id="navButton" class="nav-item">
                <button type="button" class="btn btn-outline-light btn-sm m-1">Inicio</button>
              </li>
              <li id="navButton" class="nav-item">
                <button type="button" class="btn btn-outline-light btn-sm m-1">Catalogo</button>
              </li>
              <li id="navButton" class="nav-item">
                <button type="button" class="btn btn-outline-light btn-sm m-1">Login</button>
              </li>
              <li class="nav-item">
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
